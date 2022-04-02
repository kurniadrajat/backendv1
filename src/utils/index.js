/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable eol-last */
/* eslint-disable indent */
const mapDBToModelAlbums = ({
    id,
    name,
    year,
}) => ({
    id,
    name,
    year,
});

const mapOptSong = ({ song_id, song_title, performer }) => ({
    id: song_id,
    title: song_title,
    performer,
});

const mapDBToModelSongs = ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
  }) => ({
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
});

module.exports = { mapDBToModelAlbums, mapOptSong, mapDBToModelSongs };