// import aws from "aws-sdk";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// const ses = new aws.SES({region: 'eu-west-1'});

const client = new SESClient({ region: "ap-south-1" });


export const handler =  async (event, context, callback) => {
    let result = await sendMail("Your consulation appointment", "Thankyou for choosing connectedu");
    return result;
};

async function sendMail(subject, data) {
  const emailParams = {
        Destination: {
          ToAddresses: ["tluanga34@gmail.com"],
        },
        Message: {
          Body: {
            Text: { Data: data },
          },
          Subject: { Data: subject },
        },
        Source: "tluanga34@gmail.com",
  };
      
  try {
        const data = new SendEmailCommand(emailParams);
        return client.send(data);
        // const clientPromise = await client.send(data)
        // console.log("MAIL SENT SUCCESSFULLY!!", clientPromise);    
        // return clientPromise;
  } catch (e) {
        console.log("FAILURE IN SENDING MAIL!!", e);
      }  
}