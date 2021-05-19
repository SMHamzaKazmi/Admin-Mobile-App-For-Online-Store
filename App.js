import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ProductsList")}>
        <View style={styles.homebuttons}>
          <Text style={styles.homebuttontext}>Manage Products</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EmployeesList")}>
        <View style={styles.homebuttons}>
          <Text style={styles.homebuttontext}>Manage Employees</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OrdersList")}>
        <View style={styles.homebuttons}>
          <Text style={styles.homebuttontext}>Manage Orders</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ProductsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails", {productId: 1})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: S21</Text>
          <Text style={styles.listbuttontext}>Price: 1,30,000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails", {productId: 2})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Note 20</Text>
          <Text style={styles.listbuttontext}>Price: 1,50,000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails", {productId: 3})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Mate 20</Text>
          <Text style={styles.listbuttontext}>Price: 90,000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails", {productId: 4})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Poco X3</Text>
          <Text style={styles.listbuttontext}>Price: 40,000</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ProductDetailsScreen({ route }) {
  const { productId } = route.params
  switch(productId) {
    case 1:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: S21</Text>
          <Text style={styles.details}>Price: 1,30,000</Text>
          <Text style={styles.details}>Manufacturer: Samsung</Text>
          <Text style={styles.details}>Launch date: 2020</Text>
          <Text style={styles.details}>Color: White</Text>
        </View>
      );
    case 2:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Note 20</Text>
          <Text style={styles.details}>Price: 1,50,000</Text>
          <Text style={styles.details}>Manufacturer: Samsung</Text>
          <Text style={styles.details}>Launch date: 2021</Text>
          <Text style={styles.details}>Color: Black</Text>
        </View>
      );
    case 3:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Mate 20</Text>
          <Text style={styles.details}>Price: 90,000</Text>
          <Text style={styles.details}>Manufacturer: Huawei</Text>
          <Text style={styles.details}>Launch date: 2019</Text>
          <Text style={styles.details}>Color: White</Text>
          </View>
      );
    case 4:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Poco X3</Text>
          <Text style={styles.details}>Price: 40,000</Text>
          <Text style={styles.details}>Manufacturer: Xiaomi</Text>
          <Text style={styles.details}>Launch date: 2020</Text>
          <Text style={styles.details}>Color: Blue</Text>
        </View>
      );
  }
}

function EmployeesListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("EmployeeDetails", {employeeId: 1})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Ali</Text>
          <Text style={styles.listbuttontext}>Designation: Administrator</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("EmployeeDetails", {employeeId: 2})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Ahmed</Text>
          <Text style={styles.listbuttontext}>Designation: Administrator</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("EmployeeDetails", {employeeId: 3})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Usama</Text>
          <Text style={styles.listbuttontext}>Designation: Manager</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("EmployeeDetails", {employeeId: 4})}}>
        <View style={styles.listbuttons}>
          <Text style={styles.listbuttontext}>Name: Rehan</Text>
          <Text style={styles.listbuttontext}>Designation: Manager</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function EmployeeDetailsScreen({ route }) {
  const { employeeId } = route.params
  switch(employeeId) {
    case 1:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Ali</Text>
          <Text style={styles.details}>Designation: Administrator</Text>
          <Text style={styles.details}>Address: Islamabad</Text>
          <Text style={styles.details}>Salary: 80,000</Text>
        </View>
      );
    case 2:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Ahmed</Text>
          <Text style={styles.details}>Designation: Administrator</Text>
          <Text style={styles.details}>Address: Rawalpindi</Text>
          <Text style={styles.details}>Salary: 90,000</Text>
        </View>
      );
    case 3:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Usama</Text>
          <Text style={styles.details}>Designation: Manager</Text>
          <Text style={styles.details}>Address: Karachi</Text>
          <Text style={styles.details}>Salary: 60,000</Text>
          </View>
      );
    case 4:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Name: Rehan</Text>
          <Text style={styles.details}>Designation: Manager</Text>
          <Text style={styles.details}>Address: Lahore</Text>
          <Text style={styles.details}>Salary: 70,000</Text>
        </View>
      );
  }
}

function OrdersListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("OrderDetails", {orderId: 1})}}>
        <View style={styles.orderbuttons}>
          <Text style={styles.listbuttontext}>Order no: 1</Text>
          <Text style={styles.listbuttontext}>Product name: S21</Text>
          <Text style={styles.listbuttontext}>Price: 1,30,000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("OrderDetails", {orderId: 2})}}>
        <View style={styles.orderbuttons}>
          <Text style={styles.listbuttontext}>Order no: 2</Text>
          <Text style={styles.listbuttontext}>Product name: Poco X3</Text>
          <Text style={styles.listbuttontext}>Price: 40,000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("OrderDetails", {orderId: 3})}}>
        <View style={styles.orderbuttons}>
          <Text style={styles.listbuttontext}>Order no: 3</Text>
          <Text style={styles.listbuttontext}>Product name: Mate 20</Text>
          <Text style={styles.listbuttontext}>Price: 90,000</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function OrderDetailsScreen({ route }) {
  const { orderId } = route.params
  switch(orderId) {
    case 1:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Order no: 1</Text>
          <Text style={styles.details}>Product name: S21</Text>
          <Text style={styles.details}>Price: 1,30,000</Text>
          <Text style={styles.details}>Customer name: Basim</Text>
          <Text style={styles.details}>Order date: 10-5-2021</Text>
          <Text style={styles.details}>Shipping status: Delivered</Text>
        </View>
      );
    case 2:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Order no: 2</Text>
          <Text style={styles.details}>Product name: Poco X3</Text>
          <Text style={styles.details}>Price: 40,000</Text>
          <Text style={styles.details}>Customer name: Hamza</Text>
          <Text style={styles.details}>Order date: 13-5-2021</Text>
          <Text style={styles.details}>Shipping status: Pending</Text>
        </View>
      );
    case 3:
      return (
        <View style={styles.container}>
          <Text style={styles.details}>Order no: 3</Text>
          <Text style={styles.details}>Product name: Mate 20</Text>
          <Text style={styles.details}>Price: 90,000</Text>
          <Text style={styles.details}>Customer name: Sajad</Text>
          <Text style={styles.details}>Order date: 15-5-2021</Text>
          <Text style={styles.details}>Shipping status: Pending</Text>
        </View>
      );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Online Store", headerStyle: { backgroundColor: "yellow" } }} />
        <Stack.Screen name="ProductsList" component={ProductsListScreen} options={{ title: "Products List", headerStyle: { backgroundColor: "yellow" } }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={({ route }) => ({ title: "Product ID " + route.params.productId + " Details", headerStyle: { backgroundColor: "yellow" } })} />
        <Stack.Screen name="EmployeesList" component={EmployeesListScreen} options={{ title: "Employees List", headerStyle: { backgroundColor: "yellow" } }} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} options={({ route }) => ({ title: "Employee ID " + route.params.employeeId + " Details", headerStyle: { backgroundColor: "yellow" } })} />
        <Stack.Screen name="OrdersList" component={OrdersListScreen} options={{ title: "Orders List", headerStyle: { backgroundColor: "yellow" } }} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} options={({ route }) => ({ title: "Order ID " + route.params.orderId + " Details", headerStyle: { backgroundColor: "yellow" } })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  homebuttons: {
    backgroundColor: "lightblue",
    width: 240,
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
  },

  homebuttontext: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
  },

  listbuttons: {
    backgroundColor: "lightblue",
    width: 220,
    height: 80,
    marginBottom: 20,
    borderRadius: 25,
  },

  listbuttontext: {
    fontSize: 17,
    textAlign: "center",
    paddingTop: 10,
  },

  orderbuttons: {
    backgroundColor: "lightblue",
    width: 230,
    height: 110,
    marginBottom: 20,
    borderRadius: 25,
  },

  details: {
    fontSize: 22,
    marginBottom: 10,
  },
});
