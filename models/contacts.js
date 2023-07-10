const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
const updatesContact = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};
const listContacts = async () => {
  const contactsData = await fs.readFile(contactsPath, "utf-8");
  const result = JSON.parse(contactsData);

  return result;
};

const getContactById = async (id) => {
  const list = await listContacts();
  const result = list.find((item) => item.id === id);

  return result || null;
};

const removeContact = async (id) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const [contact] = contacts.splice(index, 1);
  await updatesContact(contacts);

  return contact;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };

  contacts.push(newContact);
  await updatesContact(contacts);

  return newContact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }
  contacts[index] = { id: id, ...body };
  await updatesContact(contacts);

  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
