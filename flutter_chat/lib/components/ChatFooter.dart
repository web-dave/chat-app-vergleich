import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

import '../state.dart';

// Define a custom Form widget.
class ChatFooter extends StatefulWidget {
  const ChatFooter({super.key});

  @override
  ChatFooterState createState() {
    return ChatFooterState();
  }
}

// Define a corresponding State class.
// This class holds data related to the form.
class ChatFooterState extends State<ChatFooter> {
  // Create a global key that uniquely identifies the Form widget
  // and allows validation of the form.
  //
  // Note: This is a `GlobalKey<FormState>`,
  // not a GlobalKey<ChatFooterState>.
  final _formKey = GlobalKey<FormState>();
  var message = '';

  @override
  Widget build(BuildContext context) {
    // Build a Form widget using the _formKey created above.
    var appState = context.watch<MyAppState>();
    var username = appState.username;
    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          TextFormField(
            validator: (value) =>
                (value == null || value.isEmpty) ? 'Whäääää!' : null,
            restorationId: 'message',
            onChanged: (value) {
              message = value;
              appState.sendMessage('typing', appState.username);
            },
            decoration: InputDecoration(
              hintText: 'Write message',
              suffixIcon: IconButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    // If the form is valid, display a snackbar. In the real world,
                    // you'd often call a server or save the information in a database.
                    // ScaffoldMessenger.of(context).showSnackBar(
                    //   const SnackBar(content: Text('Sending Pending Data')),
                    // );
                    appState.sendMessage('message', message);
                  }
                },
                icon: const Icon(
                  Icons.send,
                  color: Colors.blueAccent,
                  size: 24.0,
                  semanticLabel: 'Foo Bar',
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
