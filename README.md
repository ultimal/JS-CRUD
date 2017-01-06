# JS-CRUD
JS-CRUD is the result of searching for a in browser CRUD that is simple to implement and quick to grab data from. In my search I was unable to find something similar and so I decided to put this quick library together. This library is a part of a large effort to build hydration kits to enable designing and deploying enterprise software with minimal effort.

This page details the most common usage scenarios and the architecture of this library.

## Introduction
JS-CRUD makes it easy to present data collection forms to end users. It keeps all information in browser memory and that information can easily be sent off to a web server for safe storage or kept in memory for further processing. Data collection forms are presented in tabular form. It is designed for bootstrap, so all forms are responsive and will scale automatically.

### Features
This library provides the following features:
 - Clean format
 - Custom table lengths
 - Two fields to choose from: *Text* or *Dropdown*
 - Automatic populating of data into *dropdown* boxes from other tables
 - Delegate based table update mechanism

## Usage
This library is designed to make it easy to integrate into existing web applications. To implement a CRUD, the following is required:
 - An empty *DIV*.
 - One line of Javascript code.
 
This section covers common use scenarios.

### Simple Table
A simple table would contain 1 or more columns. If it is a 1 column table, it can also update dropdowns in other tables. In this example a simple table is created and it is setup to update the dropdown in the table from the next example.

[![](https://cldup.com/PsICeLpMUZ.PNG)]()

```
// Create a table for Server Roles
var server_roles = new CustomTable(
  "server_roles",
  "server_roles",
  ["Role Name"],
  [
    ["role_name","text","Server Role Name"]
  ],
  "servers.update_field_data([\"role\",server_roles.item_list]);"
);
```

### Table with Dropdowns
[![](https://cldup.com/PydF1Cqx4M.PNG)]()
```
// Create a table for Servers
var servers = new CustomTable(
  // Variable name for click events
  "servers",
  // Name of the div where to draw the table
  "server_list",
  // List of all the columns in the table
  ["Server Name", "IP Address", "RAM in GB", "Site", "Role"],
  // List of input fields to display
  [
    ["server_name","text","Server Name"],
    ["ip_address","text","IP Address"],
    ["ram","dropdown",["2GB","4GB","8GB"]],
    ["site","dropdown",""],
    ["role","dropdown",""]
  ],
  // Delegate function to be called whenever data is updated in table
  ""
);
```
## Architecture

### Class Diagram

[![](https://cldup.com/wFnpHU3OOe.png)]()

### Properties

### Methods

## Notes
