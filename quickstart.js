/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START speech_quickstart]
// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Your Google Cloud Platform project ID
const projectId = process.env.GOOGLE_PROJECT_ID; // 'YOUR_PROJECT_ID';

// Instantiates a client
const speechClient = Speech({
  projectId: projectId
});

// The name of the audio file to transcribe
const fileName = './resources/audio.raw';

// The audio file's encoding and sample rate
const options = {
  encoding: 'LINEAR16',
  sampleRate: 16000
};

// Detects speech in the audio file

// Note: 原本範例的寫法
// speechClient.recognize(fileName, options)
//   .then((results) => {
//     const transcription = results[0];
//     console.log(`Transcription: ${transcription}`);
//   });

// Note: 改成檢查 err 的寫法
speechClient.recognize(fileName, options, function(err, transcript) {
  if (err) {
    console.log("err:" + err);
    return;
  }
	
  console.log("transcript:" + transcript)
  // transcript = 'how old is the Brooklyn Bridge'
});
// [END speech_quickstart]
