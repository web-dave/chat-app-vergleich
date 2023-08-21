import 'package:flutter/material.dart';
import 'package:flutter_chat/state.dart';
import 'package:provider/provider.dart';

class ChatBody extends StatelessWidget {
/*
  final ScrollController _scrollController = ScrollController();
  void _scrollToBottom() {
    _scrollController.animateTo(
      _scrollController.position.maxScrollExtent,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }*/

  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();

    Alignment nichtGanzLinks = Alignment.centerRight;
    return Scaffold(
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: appState.messages.length,
              itemBuilder: (BuildContext context, int index) {
                dynamic msg = appState.messages[index];
                return ListTile(
                  title: Align(
                    alignment: appState.username == msg['name']
                        ? Alignment.centerLeft
                        : nichtGanzLinks,
                    child: Text(
                      msg['text'],
                    ),
                  ),
                );
              },
            ),
          )
        ],
      ),
    );
  }
}
