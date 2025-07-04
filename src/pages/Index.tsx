import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Brain } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
}

const EducationTransformationBackground = () => {
  const [transformationStage, setTransformationStage] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  // Generate transformation particles with improved movement
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 1,
          opacity: Math.random() * 0.9 + 0.1,
          speed: Math.random() * 0.2 + 0.05,
          direction: Math.random() * Math.PI * 2,
          wobble: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    // Smoother particle animation with wobble effect
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + Math.cos(p.direction) * p.speed + Math.sin(p.phase) * p.wobble) % 100,
        y: (p.y + Math.sin(p.direction) * p.speed + Math.cos(p.phase) * p.wobble) % 100,
        phase: p.phase + 0.1
      })));
    }, 32);

    return () => clearInterval(interval);
  }, []);

  // Smoother auto-progress transformation with easing
  useEffect(() => {
    const interval = setInterval(() => {
      setTransformationStage(prev => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const TraditionalStudent = ({ opacity, scale }) => (
    <div 
      className="absolute transition-all duration-2000 ease-in-out transform-gpu"
      style={{
        left: '15%',
        top: '40%',
        opacity: opacity,
        transform: `scale(${scale}) translateZ(0)`,
        filter: `blur(${(1 - opacity) * 2}px)`
      }}
    >
      <div className="relative animate-float">
        {/* More realistic head with proper proportions */}
        <div className="w-20 h-24 bg-gradient-to-b from-peach-300 to-peach-400 rounded-full mb-2 relative border-2 border-white shadow-xl overflow-hidden transition-all duration-1000">
          {/* Hair - more realistic style */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-22 h-12 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-full border-2 border-amber-700 animate-subtle-sway"></div>
          {/* Bangs */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-amber-800 rounded-b-lg"></div>
          
          {/* More realistic facial features */}
          <div className="absolute top-8 left-6 w-2 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full animate-blink"></div>
          <div className="absolute top-8 right-6 w-2 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full animate-blink"></div>
          {/* Eyebrows */}
          <div className="absolute top-7 left-5 w-3 h-1 bg-amber-700 rounded-full transform -rotate-12"></div>
          <div className="absolute top-7 right-5 w-3 h-1 bg-amber-700 rounded-full transform rotate-12"></div>
          
          {/* Nose */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-peach-500 rounded-full"></div>
          
          {/* Mouth - showing stress */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-600 rounded-full border border-red-700"></div>
          
          {/* Cheeks - flushed from stress */}
          <div className="absolute top-11 left-3 w-3 h-3 bg-red-300 rounded-full opacity-60 animate-pulse-slow"></div>
          <div className="absolute top-11 right-3 w-3 h-3 bg-red-300 rounded-full opacity-60 animate-pulse-slow"></div>
        </div>
        
        {/* More realistic body with school uniform */}
        <div className="w-24 h-36 bg-gradient-to-b from-navy-600 to-navy-800 rounded-lg relative border-2 border-white shadow-lg">
          {/* School blazer details */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-navy-500 rounded-t-lg border-b-2 border-navy-700"></div>
          
          {/* School tie with pattern */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-gradient-to-b from-red-600 to-red-800 border border-red-700 animate-gentle-sway">
            <div className="absolute top-2 w-full h-1 bg-yellow-400"></div>
            <div className="absolute top-6 w-full h-1 bg-yellow-400"></div>
            <div className="absolute top-10 w-full h-1 bg-yellow-400"></div>
          </div>
          
          {/* Blazer buttons */}
          <div className="absolute top-8 left-3 w-2 h-2 bg-gold-400 rounded-full border border-gold-600 animate-glint"></div>
          <div className="absolute top-12 left-3 w-2 h-2 bg-gold-400 rounded-full border border-gold-600 animate-glint" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 left-3 w-2 h-2 bg-gold-400 rounded-full border border-gold-600 animate-glint" style={{animationDelay: '1s'}}></div>
          
          {/* Realistic arms with subtle movement */}
          <div className="absolute -left-4 top-8 w-7 h-20 bg-gradient-to-b from-navy-600 to-navy-800 rounded-full transform rotate-15 border-2 border-white shadow-md animate-arm-sway"></div>
          <div className="absolute -right-4 top-8 w-7 h-20 bg-gradient-to-b from-navy-600 to-navy-800 rounded-full transform -rotate-15 border-2 border-white shadow-md animate-arm-sway-reverse"></div>
          
          {/* Hands holding heavy textbooks */}
          <div className="absolute -left-2 top-24 w-4 h-4 bg-peach-400 rounded-full border border-peach-500"></div>
          <div className="absolute -right-2 top-24 w-4 h-4 bg-peach-400 rounded-full border border-peach-500"></div>
          
          {/* Stack of heavy textbooks with subtle bounce */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 space-y-1 animate-book-weight">
            <div className="w-10 h-3 bg-red-700 rounded border-2 border-red-800 shadow-lg"></div>
            <div className="w-10 h-3 bg-blue-700 rounded border-2 border-blue-800 shadow-lg"></div>
            <div className="w-10 h-3 bg-green-700 rounded border-2 border-green-800 shadow-lg"></div>
          </div>
          
          {/* School pocket with emblem */}
          <div className="absolute top-10 right-2 w-6 h-6 bg-navy-700 rounded border border-navy-800">
            <div className="absolute inset-1 w-4 h-4 bg-gold-400 rounded-full border border-gold-600 animate-glint"></div>
          </div>
        </div>
        
        {/* More realistic legs with school trousers */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-5 h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg border-2 border-white shadow-md"></div>
          <div className="w-5 h-20 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg border-2 border-white shadow-md"></div>
        </div>
        
        {/* School shoes */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-6 h-4 bg-black rounded-lg border border-gray-600 shadow-lg"></div>
          <div className="w-6 h-4 bg-black rounded-lg border border-gray-600 shadow-lg"></div>
        </div>
      </div>
      
      {/* Enhanced stress and confusion indicators with smooth animation */}
      <div className="absolute -top-16 -right-16 flex space-x-2">
        <div className="w-6 h-6 bg-white rounded-full opacity-90 animate-confused-bounce border-3 border-gray-400 shadow-xl flex items-center justify-center">
          <span className="text-red-600 font-bold text-sm animate-pulse">?</span>
        </div>
        <div className="w-8 h-8 bg-white rounded-full opacity-80 animate-confused-bounce border-3 border-gray-400 shadow-xl flex items-center justify-center" style={{animationDelay: '0.5s'}}>
          <span className="text-red-700 font-bold animate-pulse">??</span>
        </div>
        <div className="w-10 h-10 bg-white rounded-full opacity-70 flex items-center justify-center animate-confused-bounce border-3 border-gray-400 shadow-xl" style={{animationDelay: '1s'}}>
          <span className="text-red-800 font-bold text-lg animate-pulse">?!</span>
        </div>
      </div>
      
      {/* Sweat drops for stress with realistic drip */}
      <div className="absolute top-2 right-2 space-y-2">
        <div className="w-2 h-3 bg-cyan-300 rounded-full opacity-80 animate-sweat-drop border border-cyan-400"></div>
        <div className="w-2 h-3 bg-cyan-300 rounded-full opacity-70 animate-sweat-drop border border-cyan-400" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );

  const TraditionalTeacher = ({ opacity, scale }) => (
    <div 
      className="absolute transition-all duration-2000 ease-in-out transform-gpu"
      style={{
        right: '15%',
        top: '35%',
        opacity: opacity,
        transform: `scale(${scale}) translateZ(0)`,
        filter: `blur(${(1 - opacity) * 2}px)`
      }}
    >
      <div className="relative animate-professional-stance">
        {/* More realistic teacher head */}
        <div className="w-22 h-26 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full mb-2 relative border-2 border-white shadow-xl overflow-hidden">
          {/* Professional hairstyle */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-24 h-14 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-full border-2 border-gray-700 animate-subtle-sway"></div>
          {/* Side part */}
          <div className="absolute top-1 left-8 w-8 h-6 bg-gray-600 rounded-br-full"></div>
          
          {/* Professional glasses - more detailed */}
          <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-14 h-8 border-3 border-gray-900 rounded-full bg-transparent animate-glasses-glint">
            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full opacity-30 animate-lens-reflect"></div>
            <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full opacity-30 animate-lens-reflect"></div>
          </div>
          {/* Glasses bridge */}
          <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gray-900 rounded"></div>
          
          {/* Eyes behind glasses */}
          <div className="absolute top-10 left-7 w-2 h-3 bg-gray-800 rounded-full animate-professional-blink"></div>
          <div className="absolute top-10 right-7 w-2 h-3 bg-gray-800 rounded-full animate-professional-blink"></div>
          
          {/* Eyebrows */}
          <div className="absolute top-8 left-6 w-4 h-1 bg-gray-700 rounded-full"></div>
          <div className="absolute top-8 right-6 w-4 h-1 bg-gray-700 rounded-full"></div>
          
          {/* Nose */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-peach-400 rounded-full"></div>
          
          {/* Professional mouth */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Professional teacher attire */}
        <div className="w-26 h-40 bg-gradient-to-b from-green-700 to-green-900 rounded-lg relative border-2 border-white shadow-lg">
          {/* Suit jacket lapels */}
          <div className="absolute top-2 left-2 w-6 h-12 bg-green-600 rounded-br-full border border-green-800"></div>
          <div className="absolute top-2 right-2 w-6 h-12 bg-green-600 rounded-bl-full border border-green-800"></div>
          
          {/* Professional tie with pattern */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-24 bg-gradient-to-b from-red-700 to-red-900 border border-red-800 animate-tie-flutter">
            <div className="absolute top-3 w-full h-1 bg-gold-400 animate-pattern-shimmer"></div>
            <div className="absolute top-7 w-full h-1 bg-gold-400 animate-pattern-shimmer" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-11 w-full h-1 bg-gold-400 animate-pattern-shimmer" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-15 w-full h-1 bg-gold-400 animate-pattern-shimmer" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Suit buttons */}
          <div className="absolute top-12 left-4 w-2 h-2 bg-gold-500 rounded-full border border-gold-700 animate-button-shine"></div>
          <div className="absolute top-16 left-4 w-2 h-2 bg-gold-500 rounded-full border border-gold-700 animate-button-shine" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-20 left-4 w-2 h-2 bg-gold-500 rounded-full border border-gold-700 animate-button-shine" style={{animationDelay: '1s'}}></div>
          
          {/* Breast pocket with pen */}
          <div className="absolute top-8 right-3 w-6 h-8 bg-green-600 rounded border border-green-800">
            <div className="absolute top-1 left-1 w-1 h-6 bg-blue-600 rounded-full animate-pen-glint"></div>
            <div className="absolute top-1 right-1 w-1 h-6 bg-red-600 rounded-full animate-pen-glint" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Realistic arms with teaching gestures */}
          <div className="absolute -left-5 top-10 w-8 h-22 bg-gradient-to-b from-green-700 to-green-900 rounded-full transform rotate-45 border-2 border-white shadow-md animate-teaching-gesture"></div>
          <div className="absolute -right-5 top-10 w-8 h-22 bg-gradient-to-b from-green-700 to-green-900 rounded-full transform -rotate-12 border-2 border-white shadow-md animate-arm-rest"></div>
          
          {/* Hands */}
          <div className="absolute -left-2 top-28 w-5 h-5 bg-peach-300 rounded-full border border-peach-400"></div>
          <div className="absolute -right-2 top-28 w-5 h-5 bg-peach-300 rounded-full border border-peach-400"></div>
        </div>
        
        {/* Professional trousers */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-6 h-22 bg-gradient-to-b from-gray-800 to-black rounded-lg border-2 border-white shadow-md"></div>
          <div className="w-6 h-22 bg-gradient-to-b from-gray-800 to-black rounded-lg border-2 border-white shadow-md"></div>
        </div>
        
        {/* Professional shoes */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-7 h-5 bg-black rounded-lg border border-gray-600 shadow-lg animate-shoe-polish">
            <div className="w-full h-2 bg-gray-700 rounded-t-lg animate-leather-shine"></div>
          </div>
          <div className="w-7 h-5 bg-black rounded-lg border border-gray-600 shadow-lg animate-shoe-polish">
            <div className="w-full h-2 bg-gray-700 rounded-t-lg animate-leather-shine"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced traditional blackboard with chalk dust */}
      <div className="absolute -top-28 -left-28 w-36 h-24 bg-gradient-to-b from-gray-900 to-black rounded border-6 border-amber-800 shadow-2xl animate-blackboard-dust">
        <div className="p-4 text-white text-sm">
          <div className="w-full h-2 bg-white rounded mb-2 opacity-90 animate-chalk-line"></div>
          <div className="w-4/5 h-2 bg-white rounded mb-2 opacity-80 animate-chalk-line" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3/5 h-2 bg-white rounded mb-2 opacity-70 animate-chalk-line" style={{animationDelay: '1s'}}></div>
          <div className="w-2/3 h-2 bg-white rounded opacity-60 animate-chalk-line" style={{animationDelay: '1.5s'}}></div>
          
          {/* Chalk and eraser */}
          <div className="absolute bottom-2 right-2 w-3 h-1 bg-white rounded-full opacity-80 animate-chalk-roll"></div>
          <div className="absolute bottom-2 right-6 w-4 h-2 bg-yellow-600 rounded opacity-70 animate-eraser-dust"></div>
        </div>
        
        {/* Wooden frame details */}
        <div className="absolute -top-1 left-0 w-full h-2 bg-amber-700 rounded-t animate-wood-grain"></div>
        <div className="absolute -bottom-1 left-0 w-full h-2 bg-amber-700 rounded-b animate-wood-grain"></div>
        <div className="absolute top-0 -left-1 w-2 h-full bg-amber-700 rounded-l animate-wood-grain"></div>
        <div className="absolute top-0 -right-1 w-2 h-full bg-amber-700 rounded-r animate-wood-grain"></div>
      </div>
      
      {/* Enhanced pointer/ruler with pointing animation */}
      <div className="absolute -top-16 -left-16 w-20 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full transform rotate-45 border border-amber-700 shadow-lg animate-pointer-tap">
        <div className="absolute top-0 left-2 w-1 h-full bg-amber-400 animate-ruler-mark"></div>
        <div className="absolute top-0 right-2 w-1 h-full bg-amber-400 animate-ruler-mark"></div>
      </div>
      
      {/* Traditional teaching method indicators */}
      <div className="absolute -top-12 right-0 flex flex-col space-y-2">
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center border-3 border-white shadow-xl animate-method-pulse">
          <span className="text-white font-bold text-xs">📖</span>
        </div>
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-3 border-white shadow-xl animate-method-pulse" style={{animationDelay: '0.5s'}}>
          <span className="text-white font-bold text-xs">✏️</span>
        </div>
        <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center border-3 border-white shadow-xl animate-method-pulse" style={{animationDelay: '1s'}}>
          <span className="text-white font-bold text-xs">📏</span>
        </div>
      </div>
    </div>
  );

  const AITutor = ({ opacity, scale }) => (
    <div 
      className="absolute transition-all duration-2000 ease-in-out transform-gpu"
      style={{
        left: '50%',
        top: '45%',
        transform: `translate(-50%, -50%) scale(${scale}) translateZ(0)`,
        opacity: opacity,
        filter: `blur(${(1 - opacity) * 1}px)`
      }}
    >
      <div className="relative animate-ai-float">
        {/* Enhanced AI Core with more realistic holographic appearance */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 via-purple-600 to-indigo-700 relative shadow-2xl border-4 border-white animate-ai-core-pulse">
          {/* Holographic rings with improved animation */}
          <div className="absolute inset-4 rounded-full border-4 border-cyan-300 opacity-60 animate-holo-ring-1"></div>
          <div className="absolute inset-8 rounded-full border-4 border-blue-400 opacity-80 animate-holo-ring-2"></div>
          <div className="absolute inset-12 rounded-full border-4 border-purple-400 opacity-40 animate-holo-ring-3"></div>
          
          {/* Advanced AI facial features with intelligent glow */}
          <div className="absolute top-16 left-16 w-8 h-8 bg-white rounded-full flex items-center justify-center border-3 border-cyan-300 shadow-xl animate-ai-eye-glow">
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-ai-iris">
              <div className="absolute inset-1 bg-white rounded-full opacity-30 animate-eye-reflection"></div>
            </div>
          </div>
          <div className="absolute top-16 right-16 w-8 h-8 bg-white rounded-full flex items-center justify-center border-3 border-cyan-300 shadow-xl animate-ai-eye-glow">
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-ai-iris">
              <div className="absolute inset-1 bg-white rounded-full opacity-30 animate-eye-reflection"></div>
            </div>
          </div>
          
          {/* Digital interface elements */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-white rounded-full border-3 border-cyan-300 flex items-center justify-center animate-ai-mouth">
            <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-speech-wave"></div>
          </div>
          
          {/* Neural network pattern with data flow */}
          <div className="absolute top-1/2 left-8 w-12 h-1 bg-white rounded animate-neural-pulse"></div>
          <div className="absolute top-1/2 right-8 w-12 h-1 bg-white rounded animate-neural-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-8 left-1/2 w-1 h-12 bg-white rounded animate-neural-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-8 left-1/2 w-1 h-12 bg-white rounded animate-neural-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Circuit board patterns with electrical flow */}
          <div className="absolute top-20 left-20 w-8 h-8 border-2 border-white rounded opacity-60 animate-circuit-flow">
            <div className="absolute inset-2 border border-white rounded animate-circuit-inner"></div>
          </div>
          <div className="absolute top-20 right-20 w-8 h-8 border-2 border-white rounded opacity-60 animate-circuit-flow" style={{animationDelay: '0.5s'}}>
            <div className="absolute inset-2 border border-white rounded animate-circuit-inner"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-8 h-8 border-2 border-white rounded opacity-60 animate-circuit-flow" style={{animationDelay: '1s'}}>
            <div className="absolute inset-2 border border-white rounded animate-circuit-inner"></div>
          </div>
          <div className="absolute bottom-20 right-20 w-8 h-8 border-2 border-white rounded opacity-60 animate-circuit-flow" style={{animationDelay: '1.5s'}}>
            <div className="absolute inset-2 border border-white rounded animate-circuit-inner"></div>
          </div>
        </div>
        
        {/* Enhanced floating knowledge orbs with orbital motion */}
        <div className="absolute -top-12 -left-12 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl border-4 border-white flex items-center justify-center animate-orbital-1">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-orb-glow">
            <span className="text-yellow-600 font-bold text-sm animate-icon-pulse">📊</span>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-full shadow-2xl border-4 border-white flex items-center justify-center animate-orbital-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-orb-glow">
            <span className="text-green-600 font-bold text-sm animate-icon-pulse">🎯</span>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-12 h-12 bg-gradient-to-br from-red-300 to-red-500 rounded-full shadow-2xl border-4 border-white flex items-center justify-center animate-orbital-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-orb-glow">
            <span className="text-red-600 font-bold text-sm animate-icon-pulse">🚀</span>
          </div>
        </div>
        <div className="absolute -bottom-12 -right-12 w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full shadow-2xl border-4 border-white flex items-center justify-center animate-orbital-4">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-orb-glow">
            <span className="text-purple-600 font-bold text-sm animate-icon-pulse">💡</span>
          </div>
        </div>
        
        {/* Enhanced data streams with particle effects */}
        <div className="absolute top-1/2 -left-32 w-28 h-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-xl animate-data-stream-horizontal">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full animate-data-flow"></div>
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-300 rounded-full animate-data-particle" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-300 rounded-full animate-data-particle" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute top-1/2 -right-32 w-28 h-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-xl animate-data-stream-horizontal">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full animate-data-flow"></div>
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-300 rounded-full animate-data-particle-reverse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-300 rounded-full animate-data-particle-reverse" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute -top-32 left-1/2 w-3 h-28 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full shadow-xl animate-data-stream-vertical">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 rounded-full animate-data-flow-vertical"></div>
        </div>
        <div className="absolute -bottom-32 left-1/2 w-3 h-28 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full shadow-xl animate-data-stream-vertical">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 rounded-full animate-data-flow-vertical"></div>
        </div>
      </div>
      
      {/* Enhanced holographic interface display with typing effect */}
      <div className="absolute -top-40 -left-24 w-48 h-32 bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent rounded-xl opacity-90 p-4 border-3 border-cyan-200 shadow-2xl animate-holo-interface">
        <div className="text-white space-y-3 font-bold">
          <div className="w-full h-2 bg-white rounded shadow-lg animate-typing-line-1"></div>
          <div className="w-4/5 h-2 bg-white rounded shadow-lg animate-typing-line-2"></div>
          <div className="w-3/5 h-2 bg-white rounded shadow-lg animate-typing-line-3"></div>
          <div className="w-2/3 h-2 bg-white rounded shadow-lg animate-typing-line-4"></div>
          
          {/* Interface icons with status indicators */}
          <div className="flex space-x-2 mt-3">
            <div className="w-4 h-4 bg-yellow-300 rounded-full border border-yellow-500 animate-status-blink"></div>
            <div className="w-4 h-4 bg-green-300 rounded-full border border-green-500 animate-status-blink" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-red-300 rounded-full border border-red-500 animate-status-blink" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Holographic edge effect with shimmer */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 to-transparent opacity-30 animate-holo-shimmer"></div>
      </div>
    </div>
  );

  const ModernStudent = ({ opacity, scale }) => (
    <div 
      className="absolute transition-all duration-2000 ease-in-out transform-gpu"
      style={{
        left: '25%',
        top: '65%',
        opacity: opacity,
        transform: `scale(${scale}) translateZ(0)`,
        filter: `blur(${(1 - opacity) * 2}px)`
      }}
    >
      <div className="relative animate-happy-bounce">
        {/* More realistic modern student head */}
        <div className="w-20 h-24 bg-gradient-to-b from-peach-300 to-peach-400 rounded-full mb-2 relative border-2 border-white shadow-xl overflow-hidden">
          {/* Modern trendy hairstyle */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-22 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full border-2 border-amber-700 animate-hair-sway"></div>
          {/* Side-swept bangs */}
          <div className="absolute top-2 left-3 w-10 h-6 bg-amber-600 rounded-br-full"></div>
          
          {/* Happy, confident facial features */}
          <div className="absolute top-8 left-6 w-2 h-3 bg-gray-800 rounded-full animate-happy-blink"></div>
          <div className="absolute top-8 right-6 w-2 h-3 bg-gray-800 rounded-full animate-happy-blink"></div>
          
          {/* Raised eyebrows showing interest */}
          <div className="absolute top-7 left-5 w-3 h-1 bg-amber-700 rounded-full transform rotate-12"></div>
          <div className="absolute top-7 right-5 w-3 h-1 bg-amber-700 rounded-full transform -rotate-12"></div>
          
          {/* Nose */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-peach-500 rounded-full"></div>
          
          {/* Confident smile */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-pink-400 to-pink-600 rounded-b-full border border-pink-500 animate-smile-glow"></div>
          
          {/* Healthy, happy cheeks */}
          <div className="absolute top-11 left-3 w-3 h-3 bg-pink-200 rounded-full opacity-70 animate-happy-glow"></div>
          <div className="absolute top-11 right-3 w-3 h-3 bg-pink-200 rounded-full opacity-70 animate-happy-glow"></div>
        </div>
        
        {/* Modern casual attire */}
        <div className="w-24 h-36 bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg relative border-2 border-white shadow-lg">
          {/* Modern hoodie with logo */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-purple-400 rounded-b-lg border-b-2 border-purple-600"></div>
          
          {/* Hoodie strings */}
          <div className="absolute top-0 left-8 w-1 h-12 bg-white rounded-full animate-string-sway"></div>
          <div className="absolute top-0 right-8 w-1 h-12 bg-white rounded-full animate-string-sway" style={{animationDelay: '0.5s'}}></div>
          
          {/* Brand logo on hoodie */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded border border-gray-300 animate-logo-glow">
            <div className="absolute inset-1 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold animate-logo-pulse">AI</div>
          </div>
          
          {/* Modern pouch/kangaroo pocket */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-purple-600 rounded border border-purple-700"></div>
          
          {/* Realistic arms with confident posture */}
          <div className="absolute -left-4 top-8 w-7 h-20 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full transform rotate-12 border-2 border-white shadow-md animate-confident-gesture"></div>
          <div className="absolute -right-4 top-8 w-7 h-20 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full transform -rotate-12 border-2 border-white shadow-md animate-confident-gesture-right"></div>
          
          {/* Hands holding modern device */}
          <div className="absolute -left-2 top-24 w-4 h-4 bg-peach-400 rounded-full border border-peach-500"></div>
          <div className="absolute -right-2 top-24 w-4 h-4 bg-peach-400 rounded-full border border-peach-500"></div>
        </div>
        
        {/* Advanced tablet/device with ultra-realistic design */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-2xl border-2 border-gray-600 animate-device-glow">
          {/* Screen with active interface */}
          <div className="absolute inset-1 bg-gradient-to-br from-blue-300 via-cyan-400 to-blue-500 rounded-lg p-1 border border-gray-700 animate-screen-activity">
            <div className="w-full h-1 bg-white rounded mb-1 opacity-90 shadow-sm animate-interface-line-1"></div>
            <div className="w-3/4 h-1 bg-white rounded mb-1 opacity-80 shadow-sm animate-interface-line-2"></div>
            <div className="w-1/2 h-1 bg-white rounded mb-1 opacity-70 shadow-sm animate-interface-line-3"></div>
            
            {/* Interactive elements */}
            <div className="flex space-x-1 mt-1">
              <div className="w-2 h-2 bg-green-300 rounded-full border border-green-500 animate-app-pulse"></div>
              <div className="w-2 h-2 bg-yellow-300 rounded-full border border-yellow-500 animate-app-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-red-300 rounded-full border border-red-500 animate-app-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
            
            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-cyan-300 rounded-lg opacity-20 animate-screen-glow"></div>
          </div>
          
          {/* Device frame details */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-600 rounded-full animate-device-detail"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full animate-device-detail"></div>
        </div>
        
        {/* Modern jeans with realistic details */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-5 h-20 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg border-2 border-white shadow-md">
            <div className="absolute top-2 left-0 w-full h-1 bg-blue-400 animate-denim-fade"></div>
          </div>
          <div className="w-5 h-20 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg border-2 border-white shadow-md">
            <div className="absolute top-2 left-0 w-full h-1 bg-blue-400 animate-denim-fade"></div>
          </div>
        </div>
        
        {/* Modern sneakers with brand details */}
        <div className="flex justify-center space-x-1 mt-1">
          <div className="w-7 h-5 bg-gradient-to-b from-white to-gray-200 rounded-lg border border-gray-400 shadow-lg animate-sneaker-shine">
            <div className="w-full h-2 bg-purple-500 rounded-t-lg animate-brand-glow"></div>
            <div className="absolute bottom-0 w-full h-1 bg-gray-800 rounded-b-lg"></div>
          </div>
          <div className="w-7 h-5 bg-gradient-to-b from-white to-gray-200 rounded-lg border border-gray-400 shadow-lg animate-sneaker-shine">
            <div className="w-full h-2 bg-purple-500 rounded-t-lg animate-brand-glow"></div>
            <div className="absolute bottom-0 w-full h-1 bg-gray-800 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced success and engagement indicators with celebration animation */}
      <div className="absolute -top-16 -right-16 flex space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-success-celebration">
          <span className="text-white font-bold text-sm animate-checkmark-draw">✓</span>
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-success-celebration" style={{animationDelay: '0.3s'}}>
          <span className="text-white font-bold text-xs animate-grade-shine">A+</span>
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-2xl animate-success-celebration" style={{animationDelay: '0.6s'}}>
          <span className="text-white font-bold text-sm animate-graduation-cap">🎓</span>
        </div>
      </div>
      
      {/* Learning progress visualization with data animation */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-4 h-12 bg-gradient-to-t from-green-300 to-green-500 rounded-t-lg border-2 border-white shadow-lg animate-progress-bar-1"></div>
        <div className="w-4 h-16 bg-gradient-to-t from-blue-300 to-blue-500 rounded-t-lg border-2 border-white shadow-lg animate-progress-bar-2"></div>
        <div className="w-4 h-14 bg-gradient-to-t from-purple-300 to-purple-500 rounded-t-lg border-2 border-white shadow-lg animate-progress-bar-3"></div>
        <div className="w-4 h-18 bg-gradient-to-t from-cyan-300 to-cyan-500 rounded-t-lg border-2 border-white shadow-lg animate-progress-bar-4"></div>
      </div>
      
      {/* Confidence and happiness indicators */}
      <div className="absolute top-2 right-2 space-y-2">
        <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-90 border border-yellow-400 shadow-lg animate-sparkle-1"></div>
        <div className="w-3 h-3 bg-pink-300 rounded-full opacity-80 border border-pink-400 shadow-lg animate-sparkle-2"></div>
        <div className="w-3 h-3 bg-cyan-300 rounded-full opacity-70 border border-cyan-400 shadow-lg animate-sparkle-3"></div>
      </div>
    </div>
  );

  const getTransformationElements = () => {
    const easingFactor = 0.1;
    const smoothScale = (start, end, progress) => start + (end - start) * (1 - Math.cos(progress * Math.PI)) / 2;
    const smoothOpacity = (start, end, progress) => start + (end - start) * progress;

    switch (transformationStage) {
      case 0:
        return {
          traditional: { opacity: 1, scale: 1 },
          ai: { opacity: 0, scale: 0.3 },
          modern: { opacity: 0, scale: 0.3 }
        };
      case 1:
        return {
          traditional: { opacity: smoothOpacity(1, 0.6, 0.5), scale: smoothScale(1, 0.8, 0.5) },
          ai: { opacity: smoothOpacity(0, 0.5, 0.7), scale: smoothScale(0.3, 0.8, 0.7) },
          modern: { opacity: 0, scale: 0.3 }
        };
      case 2:
        return {
          traditional: { opacity: smoothOpacity(0.6, 0.2, 0.8), scale: smoothScale(0.8, 0.6, 0.8) },
          ai: { opacity: smoothOpacity(0.5, 1, 0.9), scale: smoothScale(0.8, 1, 0.9) },
          modern: { opacity: smoothOpacity(0, 0.4, 0.6), scale: smoothScale(0.3, 0.7, 0.6) }
        };
      case 3:
        return {
          traditional: { opacity: smoothOpacity(0.2, 0.05, 1), scale: smoothScale(0.6, 0.4, 1) },
          ai: { opacity: 1, scale: 1 },
          modern: { opacity: smoothOpacity(0.4, 1, 1), scale: smoothScale(0.7, 1, 1) }
        };
      default:
        return {
          traditional: { opacity: 1, scale: 1 },
          ai: { opacity: 0, scale: 0.3 },
          modern: { opacity: 0, scale: 0.3 }
        };
    }
  };

  const elements = getTransformationElements();

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Enhanced floating particles with improved physics */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-white via-cyan-200 to-blue-300 animate-particle-twinkle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity * 0.8,
            boxShadow: `0 0 ${particle.size * 3}px rgba(255,255,255,0.6), 0 0 ${particle.size * 6}px rgba(0,255,255,0.3)`,
            animationDelay: `${particle.id * 0.1}s`
          }}
        />
      ))}

      {/* Enhanced transformation arrow with energy flow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 rounded-full relative shadow-2xl border-2 border-yellow-200 animate-energy-flow">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-10 border-l-red-500 border-t-6 border-t-transparent border-b-6 border-b-transparent animate-arrow-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 rounded-full animate-inner-flow opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent rounded-full opacity-40 animate-light-sweep"></div>
            {/* Energy particles */}
            <div className="absolute top-1/2 left-2 w-2 h-2 bg-white rounded-full animate-energy-particle"></div>
            <div className="absolute top-1/2 left-8 w-2 h-2 bg-white rounded-full animate-energy-particle" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-16 w-2 h-2 bg-white rounded-full animate-energy-particle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* All character elements with enhanced realism and smooth transitions */}
      <TraditionalStudent opacity={elements.traditional.opacity} scale={elements.traditional.scale} />
      <TraditionalTeacher opacity={elements.traditional.opacity} scale={elements.traditional.scale} />
      <AITutor opacity={elements.ai.opacity} scale={elements.ai.scale} />
      <ModernStudent opacity={elements.modern.opacity} scale={elements.modern.scale} />

      {/* Enhanced progress indicators with smooth transitions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-6">
        {[0, 1, 2, 3].map(stage => (
          <div
            key={stage}
            className={`w-6 h-6 rounded-full transition-all duration-700 ease-in-out border-4 border-white shadow-2xl ${
              transformationStage === stage 
                ? 'bg-gradient-to-br from-cyan-300 to-cyan-500 scale-150 shadow-cyan-400/80 animate-active-indicator' 
                : 'bg-gradient-to-br from-gray-600 to-gray-800 hover:scale-110 animate-inactive-indicator'
            }`}
          />
        ))}
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/10 to-purple-900/20 animate-ambient-glow pointer-events-none"></div>
    </div>
  );
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Sign up specific validations
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    
    // Reset form after successful submission
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
    
    alert(isLogin ? 'Login successful!' : 'Account created successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-Screen Education Transformation Animation Background */}
      <EducationTransformationBackground />

      {/* Authentication Form Overlay */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 p-4 rounded-2xl shadow-2xl animate-pulse">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
              AI Tutor
            </h1>
            <p className="text-slate-200 text-lg font-medium drop-shadow-md">
              {isLogin 
                ? 'Welcome to the future of learning' 
                : 'Join the educational revolution'
              }
            </p>
          </div>

          {/* Auth Toggle Tabs */}
          <div className="flex bg-slate-800/40 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-slate-700/50">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-slate-100'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-slate-100'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-100 mb-3">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 bg-slate-900/50 backdrop-blur-sm border ${
                        errors.fullName ? 'border-red-400' : 'border-slate-600'
                      } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-slate-900/70`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400 flex items-center font-medium">
                      <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                      {errors.fullName}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-100 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 bg-slate-900/50 backdrop-blur-sm border ${
                      errors.email ? 'border-red-400' : 'border-slate-600'
                    } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-slate-900/70`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center font-medium">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-100 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-14 py-4 bg-slate-900/50 backdrop-blur-sm border ${
                      errors.password ? 'border-red-400' : 'border-slate-600'
                    } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-slate-900/70`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400 flex items-center font-medium">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                    {errors.password}
                  </p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-100 mb-3">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-14 py-4 bg-slate-900/50 backdrop-blur-sm border ${
                        errors.confirmPassword ? 'border-red-400' : 'border-slate-600'
                      } rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-slate-900/70`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors p-1"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-400 flex items-center font-medium">
                      <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-600 text-cyan-600 focus:ring-cyan-500 focus:ring-offset-0 bg-slate-900/50 transition-colors"
                    />
                    <span className="ml-3 text-sm text-slate-200 group-hover:text-slate-100 transition-colors font-medium">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Brain className="w-5 h-5 mr-3" />
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
