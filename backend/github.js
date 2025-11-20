const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const username = "Jezebel1990";
const selectedNames = [
  "aws-flask-student-registry",
  "linux-log-processor",
  "aws-serverless-order-system",
  "container-cluster-aws",
  "my_hugo_site",
  "banking-functions-python",
];

router.get("/", async (req, res) => {
  try {
    const reposData = [];

    for (const name of selectedNames) {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${name}`,
        {
          headers: {
            "Accept": "application/vnd.github.mercy-preview+json",
            "Authorization": `token ${process.env.GITHUB_TOKEN}` // 🔑 usar token
          }
        }
      );

      if (response.ok) {
        const repo = await response.json();
        reposData.push(repo);
      } else {
        console.error(`Erro ao buscar ${name}: ${response.status} ${response.statusText}`);
      }
    }

    res.json({ elements: reposData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
