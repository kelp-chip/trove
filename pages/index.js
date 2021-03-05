import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:3000/api/collections')
      .then(result => result.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });
  return (
    <div>

    </div>
  );
}
