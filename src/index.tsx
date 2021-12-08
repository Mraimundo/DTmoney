import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 600,
          createdAt: new Date('2021-12-06 15:35:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-12-18 20:35:00')
        },
        {
          id: 3,
          title: 'Supermercado',
          type: 'withdraw',
          category: 'Compras',
          amount: 300,
          createdAt: new Date('2021-12-18 20:35:00')
        },
        {
          id: 4,
          title: 'Burro do shek',
          type: 'deposit',
          category: 'shek',
          amount: 2000,
          createdAt: new Date('2021-12-18 20:35:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

