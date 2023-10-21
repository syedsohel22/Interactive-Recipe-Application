const test = (req, res) => {
  res.json({
    message: "welcome to Yummy recipes server..! and thank you!",
  });
};

const testcon = (req, res, next) => {
  try {
    res.json({
      message:
        "welcome to Yummy recipes server..! and thank you YES cookies are working",
    });
  } catch (error) {
    next(error);
  }
};

const savedRecipe = async (req, res, next) => {
  const userId = req.user._id;
  const { recipeId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.favourites.includes(recipeId)) {
      user.favourites.push(recipeId);
      await user.save();
      return res.status(200).json({ message: "Recipe saved to favorites" });
    } else {
      return res
        .status(200)
        .json({ message: "Recipe is already in favorites" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
const unsavedRecipe = async (req, res, next) => {
  const userId = req.user._id;
  const { recipeId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const index = user.favourites.indexOf(recipeId);
    if (index !== -1) {
      user.favourites.splice(index, 1);
      await user.save();
      return res.status(200).json({ message: "Recipe removed from favorites" });
    } else {
      return res.status(200).json({ message: "Recipe is not in favorites" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
module.exports = { test, testcon, savedRecipe, unsavedRecipe };
