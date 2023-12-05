// custom contact page
import React from 'react';

import Layout from '../../components/Layout.js';

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="text-white">This is the contact page</p>
      </div>
    </Layout>
  );
}