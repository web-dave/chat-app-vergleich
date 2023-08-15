import 'package:flutter/material.dart';
import 'package:flutter_chat/components/ChatFooter.dart';
import 'package:flutter_chat/state.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();
    return Scaffold(
      body: Center(child: ChatFooter()),
    );
  }
}
