const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");

const db = new DynamoDB({
  region: "ap-southeast-1",
});

exports.handler = async (event) => {
  try {
    await db.getItem({
      TableName: "users",
      Key: marshall({ id: 3 }),
      // Key: { id: { N: "3" } },
    });
    console.log(item);
    // await db.putItem({
    //   Item: { id: { S: "2" }, username: { S: "Tuguldur" } },
    //   TableName: "users",
    // });
    // await db.updateItem({
    //   item: { id: { N: "1" }, name: { S: "Tuugii_v2" } },
    //   TableName: "users",
    // });
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};

//getItem
//putItem
//updateItem
//! try this
