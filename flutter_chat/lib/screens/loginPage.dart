import 'package:flutter/material.dart';
import 'package:flutter_chat/components/form.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Center(child: MyCustomForm()),
      ),
    );
  }
}
