import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './pokemon-card.module.css';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
  pokemon: any;
}

const CategoryCard: React.FC<Props> = (props: Props) => {
  const {
    pokemon,
  } = props;

  const navigate = useNavigate();

  return (
    <Card className={css.pokemonCard} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
      <CardActionArea>
        <CardContent>
          <div className={css.pokemonId}>
            {`#${pokemon.id}`}
          </div>
        </CardContent>
        <CardMedia
          component="img"
          image={`${pokemon.sprites.front_default}`}
          alt={pokemon.name}
          height='170px'
          title={pokemon.name}
        />
        <CardContent>
          <Typography className={css.pokemonName} gutterBottom variant="body2" component="p">
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;