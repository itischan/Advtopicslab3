import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './src/screens/TransactionsListScreen';
import TransactionDetailScreen from './src/screens/TransactionDetailScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import AddTransactionFormScreen from './src/screens/AddTransactions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = ({ transactions, onAddTransaction }) => {
  const TransactionsListScreenComponent = () => (
    <TransactionsListScreen transactions={transactions} />
  );
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreenComponent} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    console.log("New transaction added:", newTransaction);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add Transaction">
          {() => <AddTransactionFormScreen onAddTransaction={handleAddTransaction} />}
        </Tab.Screen>
        <Tab.Screen name="Transactions">
          {() => <TransactionsStack transactions={transactions} onAddTransaction={handleAddTransaction} />}
        </Tab.Screen>
        <Tab.Screen name="Summary">
          {() => <SummaryScreen transactions={transactions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

