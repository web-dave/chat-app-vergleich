import 'dart:convert';
import 'dart:js_interop';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

class MyAppState extends ChangeNotifier {
  String? username;
  String typingMessage = '';
  List messages = [];
  List users = [];
  IO.Socket socket = IO.io('http://localhost:4000');
  void login(String? name) {
    if (!name.isNull) {
      username = name;
      sendMessage('newUser', '');
    }
    notifyListeners();
  }

  isLogedIn() {
    return username != null;
  }

  MyAppState() {
    listen();
  }

  void sendMessage(String signal, dynamic msg) {
    dynamic message;
    switch (signal) {
      case 'typing':
        var postfix = " is typing";
        message = '$msg$postfix';
        break;
      case 'message':
        var id = '$socket.id$Random().nextInt(199999)';
        message = {
          "id": id,
          "name": username,
          "socketID": socket.id,
          "text": msg
        };
        break;
      case 'newUser':
        message = {
          "userName": username,
          "socketID": socket.id,
        };
        break;
      case 'userLeft':
        message = {
          "userName": username,
          "socketID": socket.id,
        };
        break;
    }
    socket.emit(signal, message);
    notifyListeners();
  }

  void listen() {
    socket.on('newUserResponse', (data) {
      users.add(data);
      notifyListeners();
    });
    socket.on('typingResponse', (data) {
      typingMessage = data;
      print(data);
      notifyListeners();
    });
    socket.on('messageResponse', (data) {
      messages.add(data);
      notifyListeners();
    });
  }
}
