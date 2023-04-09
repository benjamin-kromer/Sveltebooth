import { WASABIBUCKETNAME,WASABIURL,WASABIACCESSKEY,WASABISECRETKEY } from '$env/static/private';
import AWS from 'aws-sdk';

const wasabiEndpoint = new AWS.Endpoint(WASABIURL);
const s3 = new AWS.S3({
  endpoint: wasabiEndpoint,
  accessKeyId: WASABIACCESSKEY,
  secretAccessKey: WASABISECRETKEY,
});

export default s3;