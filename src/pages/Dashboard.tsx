
import React, { useState, useRef } from 'react';
import { Send, Upload, FileText, MessageSquare, Trash2, Bot, User, Paperclip, History, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import DashboardBackground from '../components/DashboardBackground';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface UploadedDocument {
  id: string;
  name: string;
  size: string;
  uploadTime: Date;
}

export default function Dashboard() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! I'm your personalized AI tutor. I can help you learn, answer questions, and provide guidance based on your uploaded documents. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<UploadedDocument[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about: "${inputMessage}". Based on your uploaded documents and our conversation history, here's my response. This is a simulated response that would normally come from your LLM provider.`,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const newDoc: UploadedDocument = {
          id: Date.now().toString() + Math.random(),
          name: file.name,
          size: (file.size / 1024).toFixed(1) + ' KB',
          uploadTime: new Date()
        };
        setUploadedDocs(prev => [...prev, newDoc]);
      });
      toast({
        title: "Document uploaded successfully",
        description: "Your document has been processed and stored in the knowledge base.",
      });
    }
  };

  const clearChatHistory = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm your personalized AI tutor. I can help you learn, answer questions, and provide guidance based on your uploaded documents. How can I assist you today?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
    toast({
      title: "Chat history cleared",
      description: "All previous messages have been removed.",
    });
  };

  const removeDocument = (docId: string) => {
    setUploadedDocs(prev => prev.filter(doc => doc.id !== docId));
    toast({
      title: "Document removed",
      description: "Document has been removed from the knowledge base.",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DashboardBackground />
      
      <div className="relative z-20 min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 p-3 rounded-xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">AI Tutor Dashboard</h1>
              <p className="text-slate-300">Your personalized learning companion</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
            <Button
              onClick={clearChatHistory}
              variant="outline"
              className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear History
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Documents Panel */}
          <div className="col-span-3">
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FileText className="w-5 h-5 mr-2" />
                  Knowledge Base
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  <div className="space-y-2">
                    {uploadedDocs.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700/30"
                      >
                        <div className="flex items-center space-x-2 flex-1">
                          <FileText className="w-4 h-4 text-cyan-400" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{doc.name}</p>
                            <p className="text-xs text-slate-400">{doc.size}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => removeDocument(doc.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-slate-400 hover:text-red-400"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                    {uploadedDocs.length === 0 && (
                      <div className="text-center py-8 text-slate-400">
                        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No documents uploaded yet</p>
                        <p className="text-xs mt-1">Upload documents to enhance AI responses</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Panel */}
          <div className="col-span-9">
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/50 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat Session
                  <span className="ml-auto text-sm text-slate-400 flex items-center">
                    <History className="w-4 h-4 mr-1" />
                    {messages.length - 1} messages
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-4">
                {/* Messages */}
                <ScrollArea className="flex-1 mb-4">
                  <div className="space-y-4 pr-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] p-4 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                              : 'bg-slate-900/50 text-slate-100 border border-slate-700/30'
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === 'ai' && (
                              <Bot className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                            )}
                            {message.sender === 'user' && (
                              <User className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm leading-relaxed">{message.content}</p>
                              <p className="text-xs opacity-70 mt-2">
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/30">
                          <div className="flex items-center space-x-2">
                            <Bot className="w-5 h-5 text-cyan-400" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="flex items-end space-x-2">
                  <div className="flex-1 relative">
                    <Textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me anything about your documents or any topic..."
                      className="min-h-[60px] bg-slate-900/50 border-slate-600 text-white resize-none pr-12"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 bottom-2 h-8 w-8 p-0 text-slate-400 hover:text-cyan-400"
                    >
                      <Paperclip className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="h-[60px] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.txt,.md"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
