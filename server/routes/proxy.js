require("dotenv").config();
const { Router } = require("express");
const router = new Router();

router.get("/matches", (req, res) => {
  const url = "https://api.football-data.org/v4/matches";
 
  const options = {
    method: req.method,
    headers: {
      "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242",
    },
  };

  fetch(url, options)
    .then((response) => {
      res.status(response.status);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get("/teams/:id", (req, res) => {
  const url = `https://api.football-data.org/v4/teams/${req.params.id}`;
 
  const options = {
    method: req.method,
    headers: {
      "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242",
    },
  };

  fetch(url, options)
    .then((response) => {
      res.status(response.status);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get("/calendar/:id", (req, res) => {
  const url = `https://api.football-data.org/v4/teams/${req.params.id}/matches`;
  
  const options = {
    method: req.method,
    headers: {
      "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242",
    },
  };

  fetch(url, options)
    .then((response) => {
      res.status(response.status);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get("/competitions/:id", (req, res) => {
  const url = `https://api.football-data.org/v4/competitions/${req.params.id}/standings`;
  
  const options = {
    method: req.method,
    headers: {
      "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242",
    },
  };

  fetch(url, options)
    .then((response) => {
      res.status(response.status);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get("/scorers/:id", (req, res) => {
  const url = `https://api.football-data.org/v4/competitions/${req.params.id}/scorers`;
  
  const options = {
    method: req.method,
    headers: {
      "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242",
    },
  };

  fetch(url, options)
    .then((response) => {
      res.status(response.status);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
