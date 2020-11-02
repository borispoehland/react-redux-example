import React, { useEffect } from 'react';
import { NextPage } from 'next';
import ArticleList from '@components/index-page/ArticleList';
import ArticleForm from '@components/index-page/ArticleForm';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { fetchForbiddenWordsThunk } from '@redux/entities/Article';
import { Dispatch } from 'redux';
import ForbiddenWordsList from '@components/index-page/ForbiddenWordsList';
import asThunk from '../src/utils/types';

const Home: NextPage = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  useEffect((): void => {
    asThunk(dispatch)(fetchForbiddenWordsThunk());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Redux Example Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="d-flex flex-column justify-content-center align-items-start min-vh-100 mx-5">
        <div className="p-3 w-100">
          <h2>Articles:</h2>
          <ArticleList />
        </div>
        <div className="p-3 w-100 alert-warning">
          <h4>Forbidden Words:</h4>
          <ForbiddenWordsList />
        </div>
        <div className="p-3">
          <h2>Add a new article:</h2>
          <ArticleForm />
        </div>
      </main>
    </>
  );
};

export default Home;
