import React, { FC } from "react";
import SearchedCrypto from "../../components/SearchCrypto/SearchedCrypto";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import { deleteFavoriteAction } from "../../redux/Actions/AddAndDeleteActions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { DELETE_CRYPTO } from "../../redux/Types/searchCryptoTypes";

const myFavorites: FC = () => {
  const Favorites = useSelector(
    (state: RootStore) => state.favorites.favoriteDatas
  );
  return (
    <div>
      <h1>Favoris</h1>
      {Favorites.map((fav, index) => (
        <div key={index}>{fav.name}</div>
      ))}
    </div>
  );
};

export default myFavorites;
