"use client"
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/movieList');

        // Log the full response data
        console.log('Full Response Data:', response.data);

        // Extract movies with case-insensitive check
        let movieList = [];
        if (response.data.eventMovie) {
          movieList = response.data.eventMovie;
        } else if (response.data.eventmovie) {
          movieList = response.data.eventmovie;
        }

        console.log('Extracted Movies:', movieList);

        setMovies(movieList);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load movies:', error);
        setError(error);
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading movies: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">Movie Events</h1>
      
      {movies.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">No movies found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Movie Poster */}
              <div className="relative">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                />
                <div className="absolute top-4 right-4 bg-pink-700 text-white px-3 py-1 rounded-full">
                  ${movie.ticketPrice}
                </div>
              </div>

              {/* Movie Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{movie.title}</h2>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-3 text-blue-500">📅</span>
                    <span>{movie.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-3 text-green-500">🕒</span>
                    <span>{movie.time}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-3 text-red-500">📍</span>
                    <span>Hall: {movie.hallName}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-3 text-purple-500">🎬</span>
                    <span>Genre: {movie.genre}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 text-gray-700">
                  <p className="line-clamp-3">{movie.description}</p>
                </div>

                {/* Buy Ticket Button */}

                <div className="flex space-x-2 mt-6">
                        <Button
                          type="default"
                          icon={<EyeOutlined />}
                          className="bg-pink-900 hover:bg-orange-500 text-white !important"
                        >
                          View
                        </Button>
                        <Button
                          type="primary"
                          icon={<ShoppingCartOutlined />}
                          className="bg-pink-900 hover:bg-orange-500 text-white !important"
                        >
                          Booking
                        </Button>
           </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}