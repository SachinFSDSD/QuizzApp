import React, { useState } from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import categories from "../../data/categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/Error/ErrorMessage";

const Home = ({ name, setName, fetchQuestion }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!categories || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
