import 'dart:convert';

import 'package:flutter/material.dart';
// import 'package:flutter/services.dart';
import 'package:flutter_chat/state.dart';
// import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

// Define a custom Form widget.
class MyCustomForm extends StatefulWidget {
  const MyCustomForm({super.key});

  @override
  MyCustomFormState createState() {
    return MyCustomFormState();
  }
}

class FormValue {
  String? username;
  FormValue({this.username});
}

// Define a corresponding State class.
// This class holds data related to the form.
class MyCustomFormState extends State<MyCustomForm> {
  // Create a global key that uniquely identifies the Form widget
  // and allows validation of the form.
  //
  // Note: This is a `GlobalKey<FormState>`,
  // not a GlobalKey<MyCustomFormState>.
  final _formKey = GlobalKey<FormState>();
  var formValue = FormValue();

  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();
    // Build a Form widget using the _formKey created above.
    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const Text('Sign in to Open Chat'),
          TextFormField(
              validator: (value) =>
                  (value == null || value.isEmpty) ? 'Whäääää!' : null,
              restorationId: 'username',
              decoration: const InputDecoration(hintText: 'username'),
              onChanged: (value) => formValue.username = value),
          IconButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                appState.login(formValue.username);
              }
            },
            icon: const Icon(
              Icons.save,
              color: Colors.blueGrey,
              size: 24.0,
              semanticLabel: 'Foo Bar',
            ),
          ),
        ],
      ),
    );
  }
}
