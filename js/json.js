"use strict";

const user = {
  name: "Test",
  age: 26,
};

const serialisedUser = JSON.stringify(user);
//------///
const deserialisedUser = JSON.parse(serialisedUser);
