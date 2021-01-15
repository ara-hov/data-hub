import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import './layout.scss';

const Layout = () => {
  return (
    <section className='layout__container'>
      <Sidebar />
      <article className='layout__container__content'>
        <Header />
        <div className='layout__container__content__article'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </article>
    </section>
  );
};

export default Layout;
