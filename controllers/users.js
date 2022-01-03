import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with username ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((_) => _.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((_) => _.id != id);
  res.send(`Uer with ${id} deleted from database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((_) => _.id == id);
  const { firstName, lastName, age } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with ${id} has been updated`);
};
