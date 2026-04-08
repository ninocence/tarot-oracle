export interface TarotCard {
  id: number;
  number: string;
  name: string;
  uprightMeaning: string;
  reversedMeaning: string;
  keywords: string[];
  message: string;
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    number: "0",
    name: "The Fool",
    uprightMeaning: "A leap of faith awaits you. The Fool heralds new beginnings, spontaneity, and the courage to step into the unknown. Trust the journey even when the path is unclear — your innocence and openness are your greatest strengths right now.",
    reversedMeaning: "You may be holding back out of fear or acting recklessly without considering consequences. The reversed Fool asks you to find balance between caution and courage. Ground yourself before taking that next step.",
    keywords: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Leap of Faith"],
    message: "The universe rewards those brave enough to begin. Step forward — the net will appear."
  },
  {
    id: 1,
    number: "I",
    name: "The Magician",
    uprightMeaning: "You possess all the tools and resources you need to manifest your desires. The Magician channels willpower, creativity, and focused intention into reality. This is a time of immense creative power — use it wisely and deliberately.",
    reversedMeaning: "Your talents may be scattered or misdirected. Beware of manipulation, trickery, or untapped potential going to waste. Realign your intentions and ensure your actions match your true desires.",
    keywords: ["Manifestation", "Willpower", "Resourcefulness", "Power", "Skill"],
    message: "As above, so below. You are the bridge between intention and creation."
  },
  {
    id: 2,
    number: "II",
    name: "The High Priestess",
    uprightMeaning: "Trust your intuition — it speaks louder than logic right now. The High Priestess guards the threshold between the conscious and unconscious mind. Hidden knowledge is surfacing; be still and listen to the whispers of your inner voice.",
    reversedMeaning: "You may be ignoring your intuition or keeping secrets that weigh on your soul. The reversed High Priestess urges you to reconnect with your inner wisdom and stop suppressing what you already know to be true.",
    keywords: ["Intuition", "Mystery", "Inner Voice", "Unconscious", "Sacred Knowledge"],
    message: "Silence holds more answers than noise. Go inward — the truth already lives within you."
  },
  {
    id: 3,
    number: "III",
    name: "The Empress",
    uprightMeaning: "Abundance flows toward you. The Empress embodies fertility, nurturing energy, and the beauty of the natural world. This is a time to create, to love generously, and to trust in the abundant nature of the universe.",
    reversedMeaning: "You may be neglecting self-care or experiencing creative blocks. The reversed Empress asks you to reconnect with your body, nature, and the things that bring you sensory pleasure. Stop giving from an empty cup.",
    keywords: ["Abundance", "Fertility", "Nature", "Nurturing", "Sensuality"],
    message: "You are a garden in bloom. Tend to yourself with the same love you give to others."
  },
  {
    id: 4,
    number: "IV",
    name: "The Emperor",
    uprightMeaning: "Structure and authority bring stability to your world. The Emperor represents leadership, discipline, and the power of a solid foundation. Now is the time to establish order, set boundaries, and take command of your domain.",
    reversedMeaning: "Rigidity or excessive control may be stifling growth. The reversed Emperor warns against tyranny — whether from others or from your own inflexible thinking. True strength lies in knowing when to bend.",
    keywords: ["Authority", "Structure", "Leadership", "Discipline", "Stability"],
    message: "Build your empire on foundations of integrity. True power serves — it does not dominate."
  },
  {
    id: 5,
    number: "V",
    name: "The Hierophant",
    uprightMeaning: "Seek wisdom from tradition and spiritual teachings. The Hierophant represents sacred knowledge, mentorship, and the bridge between the divine and the earthly. A teacher or institution may hold the guidance you need right now.",
    reversedMeaning: "Question the rules you have been following blindly. The reversed Hierophant encourages you to find your own spiritual path rather than conforming to dogma. Your personal truth may diverge from convention.",
    keywords: ["Tradition", "Spiritual Wisdom", "Conformity", "Mentorship", "Ritual"],
    message: "Honor the wisdom of those who came before, but never stop seeking your own truth."
  },
  {
    id: 6,
    number: "VI",
    name: "The Lovers",
    uprightMeaning: "A profound choice stands before you — one that aligns heart and soul. The Lovers represent deep connection, harmony, and the sacred union of opposites. Whether in love or life, choose what resonates with your authentic self.",
    reversedMeaning: "Disharmony or avoidance of a crucial decision may be causing inner conflict. The reversed Lovers ask you to examine where you are out of alignment with your values. Healing begins with honest self-reflection.",
    keywords: ["Love", "Union", "Choice", "Harmony", "Alignment"],
    message: "Love is not just a feeling — it is a choice you make every day. Choose with your whole heart."
  },
  {
    id: 7,
    number: "VII",
    name: "The Chariot",
    uprightMeaning: "Victory through determination and willpower. The Chariot charges forward with focused ambition, overcoming obstacles through sheer force of will. Harness opposing forces within you and direct them toward your goal with unwavering resolve.",
    reversedMeaning: "You may feel directionless or overwhelmed by competing desires. The reversed Chariot suggests a loss of control or aggression without purpose. Pause, recalibrate your compass, and choose one direction.",
    keywords: ["Determination", "Victory", "Willpower", "Control", "Ambition"],
    message: "The stars do not drive the chariot — you do. Take the reins and ride toward your destiny."
  },
  {
    id: 8,
    number: "VIII",
    name: "Strength",
    uprightMeaning: "True strength is gentle. This card speaks of courage, patience, and the quiet power of compassion. You are being called to tame your inner beasts — not through force, but through understanding, love, and infinite patience.",
    reversedMeaning: "Self-doubt or raw emotional energy may be overwhelming you. The reversed Strength card asks you to find your inner reservoir of calm. You are stronger than you believe — reconnect with that quiet fire within.",
    keywords: ["Courage", "Patience", "Compassion", "Inner Strength", "Resilience"],
    message: "The softest water wears away the hardest stone. Your gentleness is your greatest power."
  },
  {
    id: 9,
    number: "IX",
    name: "The Hermit",
    uprightMeaning: "Withdraw from the noise and seek your inner light. The Hermit walks the path of solitude and introspection, carrying a lantern of hard-won wisdom. This is a sacred time for soul-searching, meditation, and discovering truth in silence.",
    reversedMeaning: "Isolation may have become loneliness rather than solitude. The reversed Hermit warns against withdrawing too far from the world. Your wisdom is meant to be shared — do not let fear keep you hidden.",
    keywords: ["Solitude", "Inner Wisdom", "Introspection", "Guidance", "Soul-Searching"],
    message: "In the silence between heartbeats, you will find the answers you have been seeking."
  },
  {
    id: 10,
    number: "X",
    name: "Wheel of Fortune",
    uprightMeaning: "The wheel turns — change is the only constant. Fortune smiles upon you as cycles shift in your favor. This is a moment of destiny, karma, and the understanding that what goes around comes around. Embrace the turning tide.",
    reversedMeaning: "You may be resisting inevitable change or feeling trapped by bad luck. The reversed Wheel reminds you that this too shall pass. Even in downturns, the wheel continues to spin — better days are coming.",
    keywords: ["Destiny", "Change", "Cycles", "Karma", "Fortune"],
    message: "Every ending is a beginning in disguise. Trust the rhythm of the universe."
  },
  {
    id: 11,
    number: "XI",
    name: "Justice",
    uprightMeaning: "Truth and fairness prevail. Justice demands honesty, accountability, and balanced decision-making. The scales are being weighed — ensure your actions align with your highest principles. Karmic balance is being restored.",
    reversedMeaning: "Injustice or dishonesty may be clouding your situation. The reversed Justice card asks you to examine where bias or unfairness exists in your life. Take responsibility for your part and seek to restore balance.",
    keywords: ["Truth", "Fairness", "Balance", "Accountability", "Karma"],
    message: "The truth needs no defense — it simply is. Stand in your integrity and let the scales settle."
  },
  {
    id: 12,
    number: "XII",
    name: "The Hanged Man",
    uprightMeaning: "Surrender to gain a new perspective. The Hanged Man suspends between worlds, seeing reality from an entirely different angle. This pause is not punishment — it is illumination. Let go of control and allow wisdom to find you.",
    reversedMeaning: "You may be resisting a necessary sacrifice or clinging to outdated perspectives. The reversed Hanged Man urges you to stop stalling. The discomfort of change is temporary; the regret of stagnation is not.",
    keywords: ["Surrender", "New Perspective", "Letting Go", "Sacrifice", "Pause"],
    message: "Sometimes the bravest thing you can do is nothing at all. In stillness, revelation awaits."
  },
  {
    id: 13,
    number: "XIII",
    name: "Death",
    uprightMeaning: "Transformation is upon you — profound, irreversible, and necessary. Death does not mean an ending but a metamorphosis. Old chapters close so new ones can begin. Release what no longer serves you and trust the process of rebirth.",
    reversedMeaning: "You may be clinging to the past or resisting a transformation that is already underway. The reversed Death card asks you to stop fighting the inevitable. The caterpillar must dissolve before the butterfly can emerge.",
    keywords: ["Transformation", "Endings", "Rebirth", "Release", "Transition"],
    message: "From the ashes of what was, something magnificent is being born. Let the old self fall away."
  },
  {
    id: 14,
    number: "XIV",
    name: "Temperance",
    uprightMeaning: "Balance, patience, and moderation guide your path. Temperance is the alchemist — blending opposites into harmony, finding the middle way. Flow with life rather than forcing it. The perfect mixture of elements is being prepared for you.",
    reversedMeaning: "Excess or imbalance may be disrupting your peace. The reversed Temperance card warns against extremes — whether in behavior, emotion, or lifestyle. Return to center and practice the art of moderation.",
    keywords: ["Balance", "Patience", "Moderation", "Harmony", "Alchemy"],
    message: "The river does not rush to the sea. Flow with grace, and you will arrive exactly where you need to be."
  },
  {
    id: 15,
    number: "XV",
    name: "The Devil",
    uprightMeaning: "Examine what binds you. The Devil reveals shadow patterns — addiction, materialism, toxic attachments, or self-imposed limitations. The chains are looser than they appear. Awareness is the first step toward liberation.",
    reversedMeaning: "You are breaking free from what once held you captive. The reversed Devil signals liberation, recovery, and the courage to face your shadows. The power was always yours — you are simply reclaiming it now.",
    keywords: ["Shadow", "Bondage", "Materialism", "Liberation", "Temptation"],
    message: "The chains you wear were placed there by your own hands. You hold the key to your freedom."
  },
  {
    id: 16,
    number: "XVI",
    name: "The Tower",
    uprightMeaning: "Sudden upheaval shatters false structures. The Tower strikes with lightning clarity, demolishing illusions and foundations built on unstable ground. Though shocking, this destruction is divine — clearing the way for something authentic to rise.",
    reversedMeaning: "You may be avoiding a necessary upheaval or experiencing the aftermath of a personal earthquake. The reversed Tower suggests the worst has passed. Now is the time to rebuild — this time on solid, truthful ground.",
    keywords: ["Upheaval", "Revelation", "Awakening", "Destruction", "Liberation"],
    message: "What crumbles was never truly solid. From the rubble, build something that cannot be shaken."
  },
  {
    id: 17,
    number: "XVII",
    name: "The Star",
    uprightMeaning: "Hope returns after the storm. The Star pours healing light upon your weary soul, restoring faith, inspiration, and a sense of cosmic purpose. You are exactly where you need to be. Trust the universe and let your light shine.",
    reversedMeaning: "You may have lost faith or feel disconnected from your sense of purpose. The reversed Star gently asks you to look up — the light has not gone out, it has only been obscured. Reconnect with what inspires you.",
    keywords: ["Hope", "Inspiration", "Healing", "Faith", "Serenity"],
    message: "Even in the darkest night, one star is enough to guide you home. You are that star."
  },
  {
    id: 18,
    number: "XVIII",
    name: "The Moon",
    uprightMeaning: "Navigate the realm of illusion and intuition. The Moon illuminates the subconscious — dreams, fears, and hidden truths emerge from the shadows. Not everything is as it seems. Trust your instincts and let your inner compass guide you through the fog.",
    reversedMeaning: "Confusion is lifting and clarity is returning. The reversed Moon signals the release of anxiety, deception, or self-delusion. The truth you feared is less frightening than the shadows your mind created.",
    keywords: ["Illusion", "Intuition", "Subconscious", "Dreams", "Mystery"],
    message: "The moon does not create the darkness — it reveals what hides within it. Face your shadows with courage."
  },
  {
    id: 19,
    number: "XIX",
    name: "The Sun",
    uprightMeaning: "Radiant joy and success illuminate your world. The Sun is the most positive card in the deck — bringing vitality, confidence, and the warmth of achievement. Everything touched by this light flourishes. Celebrate your victories and share your warmth.",
    reversedMeaning: "Your inner light may be dimmed by self-doubt or temporary setbacks. The reversed Sun reminds you that clouds are temporary — your brilliance has not diminished. Reconnect with your joy and let it radiate outward.",
    keywords: ["Joy", "Success", "Vitality", "Confidence", "Celebration"],
    message: "You were born to shine. Step into the light and let the world see your brilliance."
  },
  {
    id: 20,
    number: "XX",
    name: "Judgement",
    uprightMeaning: "A spiritual awakening calls you to rise. Judgement sounds the trumpet of self-evaluation, absolution, and rebirth. Review your past with compassion, release guilt, and answer the higher calling that resonates within your soul.",
    reversedMeaning: "Self-judgment or refusal to learn from the past may be holding you back. The reversed Judgement card asks you to forgive yourself and others. You cannot answer the call of the future while chained to old regrets.",
    keywords: ["Awakening", "Rebirth", "Reflection", "Absolution", "Calling"],
    message: "The trumpet sounds for you. Rise, shed the weight of yesterday, and answer your highest calling."
  },
  {
    id: 21,
    number: "XXI",
    name: "The World",
    uprightMeaning: "Completion, wholeness, and cosmic fulfillment. The World represents the successful end of a major cycle — you have integrated all lessons and arrived at a place of profound understanding. Celebrate this achievement; you have earned your place in the dance of life.",
    reversedMeaning: "A cycle may feel incomplete or you are resisting closure. The reversed World suggests unfinished business or a reluctance to move on. Tie up loose ends and prepare for the next magnificent chapter.",
    keywords: ["Completion", "Wholeness", "Achievement", "Integration", "Fulfillment"],
    message: "The circle is complete, yet the spiral continues. You are both the journey and the destination."
  }
];
// cache-bust-v2
