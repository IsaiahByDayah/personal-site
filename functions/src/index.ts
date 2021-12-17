import * as functions from "firebase-functions"
import { Octokit } from "@octokit/core"

export const buildAndDeploy = functions.https.onRequest(async (req, res) => {
  const prismicSecret = functions.config().prismic?.secret

  if (!prismicSecret) {
    console.error("Missing internal Prismic secret")
    return res.status(500).end()
  }

  if (req.body.secret !== prismicSecret) {
    console.log("Prismic Body: ", req.body)
    console.error("Invalid secret supplied: ", req.body.secret)
    return res.status(400).end()
  }

  const githubAccessToken = functions.config().github?.accesstoken

  if (!githubAccessToken) {
    console.error("Missing internal Github access token")
    return res.status(500).end()
  }

  const octokit = new Octokit({ auth: githubAccessToken })

  await octokit.request("POST /repos/{owner}/{repo}/dispatches", {
    owner: "isaiahbydayah",
    repo: "personal-site",
    event_type: "build-and-deploy",
  })

  return res.status(200).end()
})
