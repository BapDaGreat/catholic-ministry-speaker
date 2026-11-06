import React, { useState } from 'react';
import { Play, Download, Copy, Check, Radio, Headphones, FileText, Mic, Video, ExternalLink, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import mediaData from '../data/media.json';

export default function MediaSection() {
  const [activeBioTab, setActiveBioTab] = useState('medium');
  const [selectedVideo, setSelectedVideo] = useState(mediaData.videos[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, {
      description: 'Ready to paste directly into your parish bulletin or conference program.'
    });
  };

  const handleDownload = (filename) => {
    toast.success(`Preparing ${filename} download...`, {
      description: 'High-resolution press asset generated.'
    });
  };

  const toggleAudio = (id) => {
    if (isPlayingAudio === id) {
      setIsPlayingAudio(null);
      toast('Audio preview paused');
    } else {
      setIsPlayingAudio(id);
      toast.success('Playing homily & podcast preview', {
        description: 'Streaming recorded live from Notre Dame Seminary chapel.'
      });
    }
  };

  return (
    <section id="media" className="py-20 sm:py-28 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
            Audio, Video &amp; Press Assets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 mb-4">
            Sample Keynotes &amp; Event Organizer Toolkit
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-700">
            Preview Julian's preaching style, listen to recent podcast interviews, and access high-resolution headshots and promotional copy for your parish bulletin or conference program.
          </p>
        </div>

        {/* 1. Video Keynote Showcases */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 flex items-center gap-2">
                <Video className="w-5 h-5 text-gold-600" />
                Featured Preaching &amp; Keynote Samples
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Recorded live at diocesan assemblies and Eucharistic congresses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Active Video Player Screen */}
            <div className="lg:col-span-8 bg-black rounded-2xl overflow-hidden shadow-warm-lg border border-stone-300">
              <div className="relative aspect-video bg-navy-950 flex items-center justify-center group">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-85 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Center Play Button Overlay */}
                <button
                  onClick={() => toast.info(`Playing keynote: "${selectedVideo.title}"`)}
                  className="absolute w-16 h-16 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110 active:scale-95"
                  aria-label="Play video sample"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>

                {/* Video Info Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-navy-900/90 text-gold-400 uppercase tracking-wider mb-1.5 inline-block border border-gold-400/20">
                    {selectedVideo.event}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                    {selectedVideo.title}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {selectedVideo.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Playlist Selector */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                Select Keynote to Preview:
              </span>
              {mediaData.videos.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    selectedVideo.id === vid.id
                      ? 'bg-white border-gold-500 shadow-warm-sm ring-1 ring-gold-500'
                      : 'bg-stone-50 hover:bg-white border-stone-200'
                  }`}
                >
                  <div className="w-20 aspect-video rounded-lg overflow-hidden bg-stone-200 shrink-0 relative">
                    <img src={vid.thumbnail} alt="" className="w-full h-full object-cover" />
                    <div className="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-[9px] text-white font-mono">
                      {vid.duration}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs sm:text-sm text-navy-950 line-clamp-1 leading-snug">
                      {vid.title}
                    </h5>
                    <p className="text-[11px] text-stone-700 mt-1 line-clamp-1">
                      {vid.event}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Audio Podcasts & Homilies */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-200">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-gold-600" />
                Podcasts &amp; Audio Homilies
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Reflections on the liturgy, Southern Catholic heritage, and intentional discipleship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaData.audio.map((audio) => (
              <div
                key={audio.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-warm-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                      {audio.duration}
                    </span>
                    <Radio className={`w-4 h-4 ${isPlayingAudio === audio.id ? 'text-green-600 animate-pulse' : 'text-stone-400'}`} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-navy-950 mb-1 leading-tight">
                    {audio.title}
                  </h4>
                  <p className="text-xs text-stone-700 font-medium mb-3">
                    {audio.show}
                  </p>
                  <p className="text-xs text-stone-700 leading-relaxed mb-6">
                    {audio.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-150 flex items-center justify-between">
                  <button
                    onClick={() => toggleAudio(audio.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold active:scale-[0.97]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPlayingAudio === audio.id ? 'Pause' : 'Listen Now'}</span>
                  </button>

                  <a
                    href={audio.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-stone-700 hover:text-navy-950 flex items-center gap-1 font-medium"
                  >
                    <span>Spotify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Event Organizer Press Kit & One-Sheet Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-warm-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
              For Event Coordinators &amp; Media Chairs
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-3">
              Promotional Press Kit &amp; Event Assets
            </h3>
            <p className="font-sans text-sm text-stone-700">
              Download high-resolution print headshots, copy approved bios for parish bulletins, and review technical stage requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: 1-Click Copy Bios */}
            <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
                <span className="font-serif text-lg font-bold text-navy-950 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold-600" />
                  Speaker Bio for Programs
                </span>

                {/* Bio Length Selector */}
                <div className="flex items-center gap-1 bg-stone-200/70 p-1 rounded-lg">
                  {['short', 'medium', 'long'].map((length) => (
                    <button
                      key={length}
                      onClick={() => setActiveBioTab(length)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold capitalize transition-colors ${
                        activeBioTab === length
                          ? 'bg-white text-navy-950 shadow-sm'
                          : 'text-stone-700 hover:text-navy-950'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bio Content Box */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 mb-4 font-sans text-xs sm:text-sm text-stone-700 leading-relaxed min-h-[140px] flex items-center">
                <p>{mediaData.pressKit.bios[activeBioTab]}</p>
              </div>

              {/* Copy CTA */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-stone-700">
                  Approx. {activeBioTab === 'short' ? '45' : activeBioTab === 'medium' ? '90' : '170'} words
                </span>
                <button
                  onClick={() => copyToClipboard(mediaData.pressKit.bios[activeBioTab], `${activeBioTab.toUpperCase()} Bio`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold active:scale-[0.97]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy {activeBioTab} Bio</span>
                </button>
              </div>
            </div>

            {/* Right: Downloadable Headshots & AV Rider */}
            <div className="lg:col-span-5 space-y-6">
              {/* Headshots */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h4 className="font-serif text-lg font-bold text-navy-950 mb-3 flex items-center gap-2">
                  <Download className="w-4 h-4 text-gold-600" />
                  High-Resolution Headshots
                </h4>
                <div className="space-y-3">
                  {mediaData.pressKit.headshots.map((shot) => (
                    <div
                      key={shot.id}
                      className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200 text-xs"
                    >
                      <div>
                        <span className="font-semibold text-navy-950 block">
                          {shot.title.split('(')[0]}
                        </span>
                        <span className="text-[11px] text-stone-700">
                          {shot.resolution} &middot; Print Ready
                        </span>
                      </div>
                      <button
                        onClick={() => handleDownload(`${shot.id}.jpg`)}
                        className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-navy-950 transition-colors"
                        title="Download JPG"
                      >
                        <Download className="w-4 h-4 text-gold-700" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* AV Technical Rider Quick Summary */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h4 className="font-serif text-lg font-bold text-navy-950 mb-2 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-gold-600" />
                  A/V Technical Rider
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-navy-950 shrink-0">Mic:</span>
                    <span>Wireless hands-free lavalier or earset preferred.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-navy-950 shrink-0">Screen:</span>
                    <span>16:9 HDMI projection with sound output for slides.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-navy-950 shrink-0">Stage:</span>
                    <span>Small standing table for Bible and water.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
