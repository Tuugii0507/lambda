const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const { S3 } = require("@aws-sdk/client-s3");

const db = new DynamoDB({
  region: "ap-southeast-1",
});

const s3 = new S3({
  region: "ap-southeast-1",
});

exports.handler = async (event) => {
  const data = event.body;
  try {
    await s3.putObject({
      Bucket: "k1bnq2",
      Key: "973967.jpg",
      Body: Buffer.from(data, "base64"),
      ContentType: "image/jpeg",
      ContentEncoding: "base64",
    });

    // await db.getItem({
    //   TableName: "users",
    //   Key: marshall({ id: 3 }),
    // });
    // console.log(item);
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
