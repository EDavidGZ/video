import React from 'react'
import { useNavigate } from 'react-router-dom';



import Button from '@mui/material/Button';
import './lessonsA1.css'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import pronouns from '../../../assets/pronouns.png'
import demonstratives from '../../../assets/demonstrativeP.png'
import verbs from '../../../assets/verbs.png'
import an from '../../../assets/an-a.png'
import the from '../../../assets/the.png'
import at from '../../../assets/at.png'
import prepositions from '../../../assets/prepositions.png'
import purpose from '../../../assets/purpose.png'
import reason from '../../../assets/reason.png'
import result from '../../../assets/result.png'
import contrast from '../../../assets/contrast.png'
import Navar from '../../Nav/Navar';



const itemData = [
    {
        img: pronouns,
        title: 'Personal Pronouns',
        author: 'Pronombres personales',
        rows: 2,
        cols: 2,
        featured: true,
        link: 'pronouns'
    },
    {
        img: demonstratives,
        title: 'Demonstratives pronouns',
        author: 'Pronombres demostrativos',
        link: 'demonstratives'
    },
    {
        img: verbs,
        title: 'The most popular verbs',
        author: 'Los verbos mas populares',
        link: 'verbs'
    },
    {
        img: an,
        title: 'an - a',
        author: 'Articulo AN - A',
        link: 'an'
    },
    {
        img: the,
        title: 'The definite article',
        author: 'El articulo definido',
        link: 'the'
    },
    {
        img: at,
        title: 'AT - IN - ON',
        author: 'en - en - en',
        link: 'at'
    },
    {
        img: prepositions,
        title: 'Prepositions',
        author: 'preposiciones',
        link: 'prepositions'
    },
    {
        img: purpose,
        title: 'purpose',
        author: 'Conectores de proposito',
        link: 'purpose'
    },
    {
        img: reason,
        title: 'reason',
        author: 'Conectores de razon',
        link: 'reason'
    },
    {
        img: result,
        title: 'result',
        author: 'Conectores de resultado',
        link: 'result'
    },
    {
        img: contrast,
        title: 'contrast',
        author: 'Conectores de contraste',
        link: 'contrastconectors'
    },
];

const LessonsA1 = () => {
    const navigate = useNavigate();

    const redirect = (topic) => {

        if (topic == "pronouns") {
            navigate("/pronouns")
        }

        if (topic == "demonstratives") {
            navigate("/demonstratives")
        }
        if (topic == "verbs") {
            navigate("/verbs")
        }
        if (topic == "an") {
            navigate("/an")
        }
        if (topic == "the") {
            navigate("/the")
        }
        if (topic == "at") {
            navigate("/at")
        }
        if (topic == "prepositions") {
            navigate("/prepositions")
        }
        if (topic == "purpose") {
            navigate("/purpose")
        }
        if (topic == "reason") {
            navigate("/reason")
        }
        if (topic == "result") {
            navigate("/result")
        }
        if (topic == "contrastconectors") {
            navigate("/contrastconectors")
        }
    }

    return (
        <div className='lessons-container'>

            <nav>
                <Navar />
            </nav>


            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Lessons</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <Button
                                    onClick={() => redirect(item.link)}
                                    sx={{ color: '#ccccffd9 ' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <PlayCircleOutlineIcon />
                                </Button>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default LessonsA1
