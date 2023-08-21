import 'package:flutter/material.dart';
import 'package:flutter_chat/components/ChatBody.dart';
import 'package:flutter_chat/components/ChatFooter.dart';
import 'package:flutter_chat/state.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();
    return Scaffold(
        appBar: AppBar(title: const Text('Chat App')),
        body: Stack(
          children: <Widget>[
            ChatBody(),
            // FittedBox(
            //   fit: BoxFit.contain,
            //   child: ChatBody(),
            // ),
            const Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                SizedBox(
                  width: double.infinity,
                  height: 80,
                  child: ChatFooter(),
                ),
              ],
            )
          ],
        )

        // Center(child: ChatFooter()),
        );
  }
}
