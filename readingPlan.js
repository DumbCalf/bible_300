// 300 Day Catholic Bible Reading Plan Data
const readingPlan = [
    { day: 1, psalm: "1", gospel: "John 1", wisdom: "Job 1-2", oldTestament: "Genesis 1-3", newTestament: "Romans 1" },
    { day: 2, psalm: "2", gospel: "John 2", wisdom: "Job 3", oldTestament: "Genesis 4-6", newTestament: "Romans 2" },
    { day: 3, psalm: "3", gospel: "John 3", wisdom: "Job 4", oldTestament: "Genesis 7-9", newTestament: "Romans 3" },
    { day: 4, psalm: "4", gospel: "John 4", wisdom: "Job 5", oldTestament: "Genesis 10-11", newTestament: "Romans 4" },
    { day: 5, psalm: "5", gospel: "John 5", wisdom: "Job 6", oldTestament: "Genesis 12-15", newTestament: "Romans 5" },
    { day: 6, psalm: "6", gospel: "John 6", wisdom: "Job 7", oldTestament: "Genesis 16-18", newTestament: "Romans 6" },
    { day: 7, psalm: "7", gospel: "John 7", wisdom: "Job 8", oldTestament: "Genesis 19-20", newTestament: "Romans 7" },
    { day: 8, psalm: "8", gospel: "John 8", wisdom: "Job 9", oldTestament: "Genesis 21-23", newTestament: "Romans 8" },
    { day: 9, psalm: "9", gospel: "John 9", wisdom: "Job 10", oldTestament: "Genesis 24", newTestament: "Romans 9" },
    { day: 10, psalm: "10", gospel: "John 10", wisdom: "Job 11", oldTestament: "Genesis 25-26", newTestament: "Romans 10" },
    { day: 11, psalm: "11", gospel: "John 11", wisdom: "Job 12", oldTestament: "Genesis 27-28", newTestament: "Romans 11" },
    { day: 12, psalm: "12", gospel: "John 12", wisdom: "Job 13", oldTestament: "Genesis 29-30", newTestament: "Romans 12" },
    { day: 13, psalm: "13", gospel: "John 13", wisdom: "Job 14", oldTestament: "Genesis 31", newTestament: "Romans 13" },
    { day: 14, psalm: "14", gospel: "John 14", wisdom: "Job 15", oldTestament: "Genesis 32", newTestament: "Romans 14" },
    { day: 15, psalm: "15", gospel: "John 15", wisdom: "Job 16", oldTestament: "Genesis 33-35", newTestament: "Romans 15" },
    { day: 16, psalm: "16", gospel: "John 16", wisdom: "Job 17", oldTestament: "Genesis 36-37", newTestament: "Romans 16" },
    { day: 17, psalm: "17", gospel: "John 17", wisdom: "Job 18", oldTestament: "Genesis 38-39", newTestament: "1 Corinthians 1" },
    { day: 18, psalm: "18", gospel: "John 18", wisdom: "Job 19", oldTestament: "Genesis 40-41", newTestament: "1 Corinthians 2" },
    { day: 19, psalm: "19", gospel: "John 19", wisdom: "Job 20", oldTestament: "Genesis 42-43", newTestament: "1 Corinthians 3" },
    { day: 20, psalm: "20", gospel: "John 20", wisdom: "Job 21", oldTestament: "Genesis 44-45", newTestament: "1 Corinthians 4" },
    { day: 21, psalm: "21", gospel: "John 21", wisdom: "Job 22", oldTestament: "Genesis 46-47", newTestament: "1 Corinthians 5" },
    { day: 22, psalm: "22", gospel: "Matthew 1-2", wisdom: "Job 23", oldTestament: "Genesis 48-50", newTestament: "1 Corinthians 6" },
    { day: 23, psalm: "23", gospel: "Matthew 3-4", wisdom: "Job 24", oldTestament: "Exodus 1-3", newTestament: "1 Corinthians 7" },
    { day: 24, psalm: "24", gospel: "Matthew 5", wisdom: "Job 25-26", oldTestament: "Exodus 4-6", newTestament: "1 Corinthians 8" },
    { day: 25, psalm: "25", gospel: "Matthew 6", wisdom: "Job 27", oldTestament: "Exodus 7-8", newTestament: "1 Corinthians 9" },
    { day: 26, psalm: "26", gospel: "Matthew 7", wisdom: "Job 28", oldTestament: "Exodus 9-10", newTestament: "1 Corinthians 10" },
    { day: 27, psalm: "27", gospel: "Matthew 8", wisdom: "Job 29", oldTestament: "Exodus 11-12", newTestament: "1 Corinthians 11" },
    { day: 28, psalm: "28", gospel: "Matthew 9", wisdom: "Job 30", oldTestament: "Exodus 13-15", newTestament: "1 Corinthians 12" },
    { day: 29, psalm: "29", gospel: "Matthew 10", wisdom: "Job 31", oldTestament: "Exodus 16-18", newTestament: "1 Corinthians 13" },
    { day: 30, psalm: "30", gospel: "Matthew 11", wisdom: "Job 32", oldTestament: "Exodus 19-21", newTestament: "1 Corinthians 14" },
    { day: 31, psalm: "31", gospel: "Matthew 12", wisdom: "Job 33", oldTestament: "Exodus 22-24", newTestament: "1 Corinthians 15" },
    { day: 32, psalm: "32", gospel: "Matthew 13", wisdom: "Job 34", oldTestament: "Exodus 25-26", newTestament: "1 Corinthians 16" },
    { day: 33, psalm: "33", gospel: "Matthew 14", wisdom: "Job 35", oldTestament: "Exodus 27-28", newTestament: "2 Corinthians 1" },
    { day: 34, psalm: "34", gospel: "Matthew 15", wisdom: "Job 36", oldTestament: "Exodus 29-30", newTestament: "2 Corinthians 2" },
    { day: 35, psalm: "35", gospel: "Matthew 16", wisdom: "Job 37", oldTestament: "Exodus 31-32", newTestament: "2 Corinthians 3" },
    { day: 36, psalm: "36", gospel: "Matthew 17", wisdom: "Job 38", oldTestament: "Exodus 33-34", newTestament: "2 Corinthians 4" },
    { day: 37, psalm: "37", gospel: "Matthew 18", wisdom: "Job 39", oldTestament: "Exodus 35-36", newTestament: "2 Corinthians 5" },
    { day: 38, psalm: "38", gospel: "Matthew 19", wisdom: "Job 40-41", oldTestament: "Exodus 37-38", newTestament: "2 Corinthians 6" },
    { day: 39, psalm: "39", gospel: "Matthew 20", wisdom: "Job 42", oldTestament: "Exodus 39-40", newTestament: "2 Corinthians 7" },
    { day: 40, psalm: "40", gospel: "Matthew 21", wisdom: "Proverbs 1", oldTestament: "Leviticus 1-4", newTestament: "2 Corinthians 8" },
    { day: 41, psalm: "41", gospel: "Matthew 22", wisdom: "Proverbs 2", oldTestament: "Leviticus 5-7", newTestament: "2 Corinthians 9" },
    { day: 42, psalm: "42", gospel: "Matthew 23", wisdom: "Proverbs 3", oldTestament: "Leviticus 8-9", newTestament: "2 Corinthians 10" },
    { day: 43, psalm: "43", gospel: "Matthew 24", wisdom: "Proverbs 4", oldTestament: "Leviticus 10-11", newTestament: "2 Corinthians 11" },
    { day: 44, psalm: "44", gospel: "Matthew 25", wisdom: "Proverbs 5", oldTestament: "Leviticus 12-13", newTestament: "2 Corinthians 12" },
    { day: 45, psalm: "45", gospel: "Matthew 26", wisdom: "Proverbs 6", oldTestament: "Leviticus 14", newTestament: "2 Corinthians 13" },
    { day: 46, psalm: "46", gospel: "Matthew 27", wisdom: "Proverbs 7", oldTestament: "Leviticus 15-16", newTestament: "Galatians 1" },
    { day: 47, psalm: "47", gospel: "Matthew 28", wisdom: "Proverbs 8", oldTestament: "Leviticus 17-19", newTestament: "Galatians 2" },
    { day: 48, psalm: "48", gospel: "Mark 1", wisdom: "Proverbs 9", oldTestament: "Leviticus 20-21", newTestament: "Galatians 3" },
    { day: 49, psalm: "49", gospel: "Mark 2", wisdom: "Proverbs 10", oldTestament: "Leviticus 22-23", newTestament: "Galatians 4" },
    { day: 50, psalm: "50", gospel: "Mark 3", wisdom: "Proverbs 11", oldTestament: "Leviticus 24-25", newTestament: "Galatians 5" },
    { day: 51, psalm: "51", gospel: "Mark 4", wisdom: "Proverbs 12", oldTestament: "Leviticus 26-27", newTestament: "Galatians 6" },
    { day: 52, psalm: "52", gospel: "Mark 5", wisdom: "Proverbs 13", oldTestament: "Numbers 1", newTestament: "Ephesians 1" },
    { day: 53, psalm: "53", gospel: "Mark 6", wisdom: "Proverbs 14", oldTestament: "Numbers 2-3", newTestament: "Ephesians 2" },
    { day: 54, psalm: "54", gospel: "Mark 7", wisdom: "Proverbs 15", oldTestament: "Numbers 4", newTestament: "Ephesians 3" },
    { day: 55, psalm: "55", gospel: "Mark 8", wisdom: "Proverbs 16", oldTestament: "Numbers 5-6", newTestament: "Ephesians 4" },
    { day: 56, psalm: "56", gospel: "Mark 9", wisdom: "Proverbs 17", oldTestament: "Numbers 7", newTestament: "Ephesians 5" },
    { day: 57, psalm: "57", gospel: "Mark 10", wisdom: "Proverbs 18", oldTestament: "Numbers 8-10", newTestament: "Ephesians 6" },
    { day: 58, psalm: "58", gospel: "Mark 11", wisdom: "Proverbs 19", oldTestament: "Numbers 11-13", newTestament: "Philippians 1" },
    { day: 59, psalm: "59", gospel: "Mark 12", wisdom: "Proverbs 20", oldTestament: "Numbers 14-15", newTestament: "Philippians 2" },
    { day: 60, psalm: "60", gospel: "Mark 13", wisdom: "Proverbs 21", oldTestament: "Numbers 16-17", newTestament: "Philippians 3" },
    { day: 61, psalm: "61", gospel: "Mark 14", wisdom: "Proverbs 22", oldTestament: "Numbers 18-20", newTestament: "Philippians 4" },
    { day: 62, psalm: "62", gospel: "Mark 15", wisdom: "Proverbs 23", oldTestament: "Numbers 21-22", newTestament: "Colossians 1" },
    { day: 63, psalm: "63", gospel: "Mark 16", wisdom: "Proverbs 24", oldTestament: "Numbers 23-25", newTestament: "Colossians 2" },
    { day: 64, psalm: "64", gospel: "Luke 1", wisdom: "Proverbs 25", oldTestament: "Numbers 26-27", newTestament: "Colossians 3" },
    { day: 65, psalm: "65", gospel: "Luke 2", wisdom: "Proverbs 26", oldTestament: "Numbers 28-29", newTestament: "Colossians 4" },
    { day: 66, psalm: "66", gospel: "Luke 3", wisdom: "Proverbs 27", oldTestament: "Numbers 30-31", newTestament: "1 Thessalonians 1" },
    { day: 67, psalm: "67", gospel: "Luke 4", wisdom: "Proverbs 28", oldTestament: "Numbers 32", newTestament: "1 Thessalonians 2" },
    { day: 68, psalm: "68", gospel: "Luke 5", wisdom: "Proverbs 29", oldTestament: "Numbers 33", newTestament: "1 Thessalonians 3" },
    { day: 69, psalm: "69", gospel: "Luke 6", wisdom: "Proverbs 30", oldTestament: "Numbers 34-36", newTestament: "1 Thessalonians 4" },
    { day: 70, psalm: "70", gospel: "Luke 7", wisdom: "Proverbs 31", oldTestament: "Deuteronomy 1-2", newTestament: "1 Thessalonians 5" },
    { day: 71, psalm: "71", gospel: "Luke 8", wisdom: "Ecclesiastes 1-2", oldTestament: "Deuteronomy 3-4", newTestament: "2 Thessalonians 1" },
    { day: 72, psalm: "72", gospel: "Luke 9", wisdom: "Ecclesiastes 3-4", oldTestament: "Deuteronomy 5-7", newTestament: "2 Thessalonians 2" },
    { day: 73, psalm: "73", gospel: "Luke 10", wisdom: "Ecclesiastes 5-6", oldTestament: "Deuteronomy 8-10", newTestament: "2 Thessalonians 3" },
    { day: 74, psalm: "74", gospel: "Luke 11", wisdom: "Ecclesiastes 7-8", oldTestament: "Deuteronomy 11-12", newTestament: "1 Timothy 1" },
    { day: 75, psalm: "75", gospel: "Luke 12", wisdom: "Ecclesiastes 9-10", oldTestament: "Deuteronomy 13-15", newTestament: "1 Timothy 2" },
    { day: 76, psalm: "76", gospel: "Luke 13", wisdom: "Ecclesiastes 11-12", oldTestament: "Deuteronomy 16-18", newTestament: "1 Timothy 3" },
    { day: 77, psalm: "77", gospel: "Luke 14", wisdom: "Song of Songs 1-2", oldTestament: "Deuteronomy 19-21", newTestament: "1 Timothy 4" },
    { day: 78, psalm: "78", gospel: "Luke 15", wisdom: "Song of Songs 3-4", oldTestament: "Deuteronomy 22-24", newTestament: "1 Timothy 5" },
    { day: 79, psalm: "79", gospel: "Luke 16", wisdom: "Song of Songs 5-6", oldTestament: "Deuteronomy 25-27", newTestament: "1 Timothy 6" },
    { day: 80, psalm: "80", gospel: "Luke 17", wisdom: "Song of Songs 7-8", oldTestament: "Deuteronomy 28", newTestament: "2 Timothy 1" },
    { day: 81, psalm: "81", gospel: "Luke 18", wisdom: "Wisdom 1", oldTestament: "Deuteronomy 29-30", newTestament: "2 Timothy 2" },
    { day: 82, psalm: "82", gospel: "Luke 19", wisdom: "Wisdom 2", oldTestament: "Deuteronomy 31-32", newTestament: "2 Timothy 3" },
    { day: 83, psalm: "83", gospel: "Luke 20", wisdom: "Wisdom 3", oldTestament: "Deuteronomy 33-34", newTestament: "2 Timothy 4" },
    { day: 84, psalm: "84", gospel: "Luke 21", wisdom: "Wisdom 4", oldTestament: "Joshua 1-4", newTestament: "Titus 1" },
    { day: 85, psalm: "85", gospel: "Luke 22", wisdom: "Wisdom 5", oldTestament: "Joshua 5-7", newTestament: "Titus 2" },
    { day: 86, psalm: "86", gospel: "Luke 23", wisdom: "Wisdom 6", oldTestament: "Joshua 8-9", newTestament: "Titus 3" },
    { day: 87, psalm: "87", gospel: "Luke 24", wisdom: "Wisdom 7", oldTestament: "Joshua 10-11", newTestament: "Philemon 1" },
    { day: 88, psalm: "88", gospel: "Acts 1", wisdom: "Wisdom 8", oldTestament: "Joshua 12-14", newTestament: "Hebrews 1" },
    { day: 89, psalm: "89", gospel: "Acts 2", wisdom: "Wisdom 9", oldTestament: "Joshua 15-17", newTestament: "Hebrews 2" },
    { day: 90, psalm: "90", gospel: "Acts 3", wisdom: "Wisdom 10", oldTestament: "Joshua 18-19", newTestament: "Hebrews 3" },
    { day: 91, psalm: "91", gospel: "Acts 4", wisdom: "Wisdom 11", oldTestament: "Joshua 20-21", newTestament: "Hebrews 4" },
    { day: 92, psalm: "92", gospel: "Acts 5", wisdom: "Wisdom 12", oldTestament: "Joshua 22-24", newTestament: "Hebrews 5" },
    { day: 93, psalm: "93", gospel: "Acts 6", wisdom: "Wisdom 13", oldTestament: "Judges 1-2", newTestament: "Hebrews 6" },
    { day: 94, psalm: "94", gospel: "Acts 7", wisdom: "Wisdom 14", oldTestament: "Judges 3-4", newTestament: "Hebrews 7" },
    { day: 95, psalm: "95", gospel: "Acts 8", wisdom: "Wisdom 15", oldTestament: "Judges 5-6", newTestament: "Hebrews 8" },
    { day: 96, psalm: "96", gospel: "Acts 9", wisdom: "Wisdom 16", oldTestament: "Judges 7-8", newTestament: "Hebrews 9" },
    { day: 97, psalm: "97", gospel: "Acts 10", wisdom: "Wisdom 17", oldTestament: "Judges 9-10", newTestament: "Hebrews 10" },
    { day: 98, psalm: "98", gospel: "Acts 11", wisdom: "Wisdom 18", oldTestament: "Judges 11-13", newTestament: "Hebrews 11" },
    { day: 99, psalm: "99", gospel: "Acts 12", wisdom: "Wisdom 19", oldTestament: "Judges 14-16", newTestament: "Hebrews 12" },
    { day: 100, psalm: "100", gospel: "Acts 13", wisdom: "Sirach 1", oldTestament: "Judges 17-19", newTestament: "Hebrews 13" },
    { day: 101, psalm: "101", gospel: "Acts 14", wisdom: "Sirach 2", oldTestament: "Judges 20-21", newTestament: "James 1" },
    { day: 102, psalm: "102", gospel: "Acts 15", wisdom: "Sirach 3", oldTestament: "Ruth 1-4", newTestament: "James 2" },
    { day: 103, psalm: "103", gospel: "Acts 16", wisdom: "Sirach 4", oldTestament: "1 Samuel 1-2", newTestament: "James 3" },
    { day: 104, psalm: "104", gospel: "Acts 17", wisdom: "Sirach 5", oldTestament: "1 Samuel 3-6", newTestament: "James 4" },
    { day: 105, psalm: "105", gospel: "Acts 18", wisdom: "Sirach 6", oldTestament: "1 Samuel 7-9", newTestament: "James 5" },
    { day: 106, psalm: "106", gospel: "Acts 19", wisdom: "Sirach 7", oldTestament: "1 Samuel 10-12", newTestament: "1 Peter 1" },
    { day: 107, psalm: "107", gospel: "Acts 20", wisdom: "Sirach 8", oldTestament: "1 Samuel 13-14", newTestament: "1 Peter 2" },
    { day: 108, psalm: "108", gospel: "Acts 21", wisdom: "Sirach 9", oldTestament: "1 Samuel 15-16", newTestament: "1 Peter 3" },
    { day: 109, psalm: "109", gospel: "Acts 22", wisdom: "Sirach 10", oldTestament: "1 Samuel 17", newTestament: "1 Peter 4" },
    { day: 110, psalm: "110", gospel: "Acts 23", wisdom: "Sirach 11", oldTestament: "1 Samuel 18-19", newTestament: "1 Peter 5" },
    { day: 111, psalm: "111", gospel: "Acts 24", wisdom: "Sirach 12", oldTestament: "1 Samuel 20-21", newTestament: "2 Peter 1" },
    { day: 112, psalm: "112", gospel: "Acts 25", wisdom: "Sirach 13", oldTestament: "1 Samuel 22-24", newTestament: "2 Peter 2" },
    { day: 113, psalm: "113", gospel: "Acts 26", wisdom: "Sirach 14", oldTestament: "1 Samuel 25-27", newTestament: "2 Peter 3" },
    { day: 114, psalm: "114", gospel: "Acts 27", wisdom: "Sirach 15", oldTestament: "1 Samuel 28-31", newTestament: "1 John 1" },
    { day: 115, psalm: "115", gospel: "Acts 28", wisdom: "Sirach 16", oldTestament: "2 Samuel 1-2", newTestament: "1 John 2" },
    { day: 116, psalm: "116", gospel: "Genesis 2-3", wisdom: "Sirach 17", oldTestament: "2 Samuel 3-5", newTestament: "1 John 3" },
    { day: 117, psalm: "117", gospel: "Genesis 12", wisdom: "Sirach 18", oldTestament: "2 Samuel 6-9", newTestament: "1 John 4" },
    { day: 118, psalm: "118", gospel: "Genesis 15", wisdom: "Sirach 19", oldTestament: "2 Samuel 10-12", newTestament: "1 John 5" },
    { day: 119, psalm: "119", gospel: "Genesis 22", wisdom: "Sirach 20", oldTestament: "2 Samuel 13-14", newTestament: "2 John 1" },
    { day: 120, psalm: "120", gospel: "Genesis 28", wisdom: "Sirach 21", oldTestament: "2 Samuel 15-16", newTestament: "3 John 1" },
    { day: 121, psalm: "121", gospel: "Genesis 32", wisdom: "Sirach 22", oldTestament: "2 Samuel 17-18", newTestament: "Jude 1" },
    { day: 122, psalm: "122", gospel: "Exodus 3", wisdom: "Sirach 23", oldTestament: "2 Samuel 19-20", newTestament: "Revelation 1" },
    { day: 123, psalm: "123", gospel: "Exodus 12", wisdom: "Sirach 24", oldTestament: "2 Samuel 21-22", newTestament: "Revelation 2" },
    { day: 124, psalm: "124", gospel: "Exodus 14", wisdom: "Sirach 25", oldTestament: "2 Samuel 23-24", newTestament: "Revelation 3" },
    { day: 125, psalm: "125", gospel: "Exodus 19-20", wisdom: "Sirach 26", oldTestament: "1 Kings 1", newTestament: "Revelation 4" },
    { day: 126, psalm: "126", gospel: "Exodus 32", wisdom: "Sirach 27", oldTestament: "1 Kings 2-3", newTestament: "Revelation 5" },
    { day: 127, psalm: "127", gospel: "Leviticus 16", wisdom: "Sirach 28", oldTestament: "1 Kings 4-5", newTestament: "Revelation 6" },
    { day: 128, psalm: "128", gospel: "Numbers 11", wisdom: "Sirach 29", oldTestament: "1 Kings 6-7", newTestament: "Revelation 7" },
    { day: 129, psalm: "129", gospel: "Numbers 13", wisdom: "Sirach 30", oldTestament: "1 Kings 8", newTestament: "Revelation 8" },
    { day: 130, psalm: "130", gospel: "Deuteronomy 6", wisdom: "Sirach 31", oldTestament: "1 Kings 9-10", newTestament: "Revelation 9" },
    { day: 131, psalm: "131", gospel: "Deuteronomy 30", wisdom: "Sirach 32", oldTestament: "1 Kings 11-12", newTestament: "Revelation 10" },
    { day: 132, psalm: "132", gospel: "Joshua 1", wisdom: "Sirach 33", oldTestament: "1 Kings 13-14", newTestament: "Revelation 11" },
    { day: 133, psalm: "133", gospel: "Joshua 24", wisdom: "Sirach 34", oldTestament: "1 Kings 15-16", newTestament: "Revelation 12" },
    { day: 134, psalm: "134", gospel: "Judges 2", wisdom: "Sirach 35", oldTestament: "1 Kings 17-18", newTestament: "Revelation 13" },
    { day: 135, psalm: "135", gospel: "1 Samuel 8", wisdom: "Sirach 36", oldTestament: "1 Kings 19-20", newTestament: "Revelation 14" },
    { day: 136, psalm: "136", gospel: "1 Samuel 16", wisdom: "Sirach 37", oldTestament: "1 Kings 21-22", newTestament: "Revelation 15" },
    { day: 137, psalm: "137", gospel: "2 Samuel 7", wisdom: "Sirach 38", oldTestament: "2 Kings 1-3", newTestament: "Revelation 16" },
    { day: 138, psalm: "138", gospel: "2 Samuel 12", wisdom: "Sirach 39", oldTestament: "2 Kings 4-5", newTestament: "Revelation 17" },
    { day: 139, psalm: "139", gospel: "1 Kings 8", wisdom: "Sirach 40", oldTestament: "2 Kings 6-8", newTestament: "Revelation 18" },
    { day: 140, psalm: "140", gospel: "1 Kings 11", wisdom: "Sirach 41", oldTestament: "2 Kings 9-10", newTestament: "Revelation 19" },
    { day: 141, psalm: "141", gospel: "1 Kings 18", wisdom: "Sirach 42", oldTestament: "2 Kings 11-13", newTestament: "Revelation 20" },
    { day: 142, psalm: "142", gospel: "2 Kings 17", wisdom: "Sirach 43", oldTestament: "2 Kings 14-15", newTestament: "Revelation 21" },
    { day: 143, psalm: "143", gospel: "2 Kings 25", wisdom: "Sirach 44", oldTestament: "2 Kings 16-17", newTestament: "Revelation 22" },
    { day: 144, psalm: "144", gospel: "Ezra 1", wisdom: "Sirach 45", oldTestament: "2 Kings 18-19", newTestament: "Isaiah 55" },
    { day: 145, psalm: "145", gospel: "Ezra 9", wisdom: "Sirach 46", oldTestament: "2 Kings 20-22", newTestament: "Isaiah 1" },
    { day: 146, psalm: "146", gospel: "Nehemiah 8", wisdom: "Sirach 47", oldTestament: "2 Kings 23-25", newTestament: "Ezekiel 18" },
    { day: 147, psalm: "147", gospel: "Isaiah 53", wisdom: "Sirach 48", oldTestament: "Hosea 1-4", newTestament: "Deuteronomy 10" },
    { day: 148, psalm: "148", gospel: "Jeremiah 31", wisdom: "Sirach 49", oldTestament: "Hosea 5-9", newTestament: "Micah 6" },
    { day: 149, psalm: "149", gospel: "Ezekiel 36", wisdom: "Sirach 50", oldTestament: "Hosea 10-14", newTestament: "Tobit 4" },
    { day: 150, psalm: "150", gospel: "Malachi 3", wisdom: "Sirach 51", oldTestament: "Amos 1-5", newTestament: "Baruch 4" },
    { day: 151, psalm: "1", gospel: "John 1", wisdom: "Job 1-2", oldTestament: "Amos 6-9", newTestament: "Romans 1" },
    { day: 152, psalm: "2", gospel: "John 2", wisdom: "Job 3", oldTestament: "Isaiah 1-2", newTestament: "Romans 2" },
    { day: 153, psalm: "3", gospel: "John 3", wisdom: "Job 4", oldTestament: "Isaiah 3-6", newTestament: "Romans 3" },
    { day: 154, psalm: "4", gospel: "John 4", wisdom: "Job 5", oldTestament: "Isaiah 7-9", newTestament: "Romans 4" },
    { day: 155, psalm: "5", gospel: "John 5", wisdom: "Job 6", oldTestament: "Isaiah 10-13", newTestament: "Romans 5" },
    { day: 156, psalm: "6", gospel: "John 6", wisdom: "Job 7", oldTestament: "Isaiah 14-18", newTestament: "Romans 6" },
    { day: 157, psalm: "7", gospel: "John 7", wisdom: "Job 8", oldTestament: "Isaiah 19-22", newTestament: "Romans 7" },
    { day: 158, psalm: "8", gospel: "John 8", wisdom: "Job 9", oldTestament: "Isaiah 23-26", newTestament: "Romans 8" },
    { day: 159, psalm: "9", gospel: "John 9", wisdom: "Job 10", oldTestament: "Isaiah 27-29", newTestament: "Romans 9" },
    { day: 160, psalm: "10", gospel: "John 10", wisdom: "Job 11", oldTestament: "Isaiah 30-32", newTestament: "Romans 10" },
    { day: 161, psalm: "11", gospel: "John 11", wisdom: "Job 12", oldTestament: "Isaiah 33-36", newTestament: "Romans 11" },
    { day: 162, psalm: "12", gospel: "John 12", wisdom: "Job 13", oldTestament: "Isaiah 37-38", newTestament: "Romans 12" },
    { day: 163, psalm: "13", gospel: "John 13", wisdom: "Job 14", oldTestament: "Isaiah 39-41", newTestament: "Romans 13" },
    { day: 164, psalm: "14", gospel: "John 14", wisdom: "Job 15", oldTestament: "Isaiah 42-44", newTestament: "Romans 14" },
    { day: 165, psalm: "15", gospel: "John 15", wisdom: "Job 16", oldTestament: "Isaiah 45-48", newTestament: "Romans 15" },
    { day: 166, psalm: "16", gospel: "John 16", wisdom: "Job 17", oldTestament: "Isaiah 49-52", newTestament: "Romans 16" },
    { day: 167, psalm: "17", gospel: "John 17", wisdom: "Job 18", oldTestament: "Isaiah 53-57", newTestament: "1 Corinthians 1" },
    { day: 168, psalm: "18", gospel: "John 18", wisdom: "Job 19", oldTestament: "Isaiah 58-62", newTestament: "1 Corinthians 2" },
    { day: 169, psalm: "19", gospel: "John 19", wisdom: "Job 20", oldTestament: "Isaiah 63-66", newTestament: "1 Corinthians 3" },
    { day: 170, psalm: "20", gospel: "John 20", wisdom: "Job 21", oldTestament: "Micah 1-4", newTestament: "1 Corinthians 4" },
    { day: 171, psalm: "21", gospel: "John 21", wisdom: "Job 22", oldTestament: "Micah 5-7", newTestament: "1 Corinthians 5" },
    { day: 172, psalm: "22", gospel: "Matthew 1-2", wisdom: "Job 23", oldTestament: "Nahum 1-3", newTestament: "1 Corinthians 6" },
    { day: 173, psalm: "23", gospel: "Matthew 3-4", wisdom: "Job 24", oldTestament: "Zephaniah 1-3", newTestament: "1 Corinthians 7" },
    { day: 174, psalm: "24", gospel: "Matthew 5", wisdom: "Job 25-26", oldTestament: "Habakkuk 1-3", newTestament: "1 Corinthians 8" },
    { day: 175, psalm: "25", gospel: "Matthew 6", wisdom: "Job 27", oldTestament: "Jeremiah 1-3", newTestament: "1 Corinthians 9" },
    { day: 176, psalm: "26", gospel: "Matthew 7", wisdom: "Job 28", oldTestament: "Jeremiah 4-5", newTestament: "1 Corinthians 10" },
    { day: 177, psalm: "27", gospel: "Matthew 8", wisdom: "Job 29", oldTestament: "Jeremiah 6-8", newTestament: "1 Corinthians 11" },
    { day: 178, psalm: "28", gospel: "Matthew 9", wisdom: "Job 30", oldTestament: "Jeremiah 9-11", newTestament: "1 Corinthians 12" },
    { day: 179, psalm: "29", gospel: "Matthew 10", wisdom: "Job 31", oldTestament: "Jeremiah 12-14", newTestament: "1 Corinthians 13" },
    { day: 180, psalm: "30", gospel: "Matthew 11", wisdom: "Job 32", oldTestament: "Jeremiah 15-17", newTestament: "1 Corinthians 14" },
    { day: 181, psalm: "31", gospel: "Matthew 12", wisdom: "Job 33", oldTestament: "Jeremiah 18-21", newTestament: "1 Corinthians 15" },
    { day: 182, psalm: "32", gospel: "Matthew 13", wisdom: "Job 34", oldTestament: "Jeremiah 22-24", newTestament: "1 Corinthians 16" },
    { day: 183, psalm: "33", gospel: "Matthew 14", wisdom: "Job 35", oldTestament: "Jeremiah 25-27", newTestament: "2 Corinthians 1" },
    { day: 184, psalm: "34", gospel: "Matthew 15", wisdom: "Job 36", oldTestament: "Jeremiah 28-30", newTestament: "2 Corinthians 2" },
    { day: 185, psalm: "35", gospel: "Matthew 16", wisdom: "Job 37", oldTestament: "Jeremiah 31-32", newTestament: "2 Corinthians 3" },
    { day: 186, psalm: "36", gospel: "Matthew 17", wisdom: "Job 38", oldTestament: "Jeremiah 33-34", newTestament: "2 Corinthians 4" },
    { day: 187, psalm: "37", gospel: "Matthew 18", wisdom: "Job 39", oldTestament: "Jeremiah 35-37", newTestament: "2 Corinthians 5" },
    { day: 188, psalm: "38", gospel: "Matthew 19", wisdom: "Job 40-41", oldTestament: "Jeremiah 38-41", newTestament: "2 Corinthians 6" },
    { day: 189, psalm: "39", gospel: "Matthew 20", wisdom: "Job 42", oldTestament: "Jeremiah 42-45", newTestament: "2 Corinthians 7" },
    { day: 190, psalm: "40", gospel: "Matthew 21", wisdom: "Proverbs 1", oldTestament: "Jeremiah 46-48", newTestament: "2 Corinthians 8" },
    { day: 191, psalm: "41", gospel: "Matthew 22", wisdom: "Proverbs 2", oldTestament: "Jeremiah 49-50", newTestament: "2 Corinthians 9" },
    { day: 192, psalm: "42", gospel: "Matthew 23", wisdom: "Proverbs 3", oldTestament: "Jeremiah 51", newTestament: "2 Corinthians 10" },
    { day: 193, psalm: "43", gospel: "Matthew 24", wisdom: "Proverbs 4", oldTestament: "Jeremiah 52", newTestament: "2 Corinthians 11" },
    { day: 194, psalm: "44", gospel: "Matthew 25", wisdom: "Proverbs 5", oldTestament: "Lamentations 1-3", newTestament: "2 Corinthians 12" },
    { day: 195, psalm: "45", gospel: "Matthew 26", wisdom: "Proverbs 6", oldTestament: "Lamentations 4-5", newTestament: "2 Corinthians 13" },
    { day: 196, psalm: "46", gospel: "Matthew 27", wisdom: "Proverbs 7", oldTestament: "Baruch 1-2", newTestament: "Galatians 1" },
    { day: 197, psalm: "47", gospel: "Matthew 28", wisdom: "Proverbs 8", oldTestament: "Baruch 3-4", newTestament: "Galatians 2" },
    { day: 198, psalm: "48", gospel: "Mark 1", wisdom: "Proverbs 9", oldTestament: "Baruch 5-6", newTestament: "Galatians 3" },
    { day: 199, psalm: "49", gospel: "Mark 2", wisdom: "Proverbs 10", oldTestament: "Ezekiel 1-3", newTestament: "Galatians 4" },
    { day: 200, psalm: "50", gospel: "Mark 3", wisdom: "Proverbs 11", oldTestament: "Ezekiel 4-7", newTestament: "Galatians 5" },
    { day: 201, psalm: "51", gospel: "Mark 4", wisdom: "Proverbs 12", oldTestament: "Ezekiel 8-11", newTestament: "Galatians 6" },
    { day: 202, psalm: "52", gospel: "Mark 5", wisdom: "Proverbs 13", oldTestament: "Ezekiel 12-14", newTestament: "Ephesians 1" },
    { day: 203, psalm: "53", gospel: "Mark 6", wisdom: "Proverbs 14", oldTestament: "Ezekiel 15-16", newTestament: "Ephesians 2" },
    { day: 204, psalm: "54", gospel: "Mark 7", wisdom: "Proverbs 15", oldTestament: "Ezekiel 17-19", newTestament: "Ephesians 3" },
    { day: 205, psalm: "55", gospel: "Mark 8", wisdom: "Proverbs 16", oldTestament: "Ezekiel 20-21", newTestament: "Ephesians 4" },
    { day: 206, psalm: "56", gospel: "Mark 9", wisdom: "Proverbs 17", oldTestament: "Ezekiel 22-23", newTestament: "Ephesians 5" },
    { day: 207, psalm: "57", gospel: "Mark 10", wisdom: "Proverbs 18", oldTestament: "Ezekiel 24-26", newTestament: "Ephesians 6" },
    { day: 208, psalm: "58", gospel: "Mark 11", wisdom: "Proverbs 19", oldTestament: "Ezekiel 27-29", newTestament: "Philippians 1" },
    { day: 209, psalm: "59", gospel: "Mark 12", wisdom: "Proverbs 20", oldTestament: "Ezekiel 30-32", newTestament: "Philippians 2" },
    { day: 210, psalm: "60", gospel: "Mark 13", wisdom: "Proverbs 21", oldTestament: "Ezekiel 33-34", newTestament: "Philippians 3" },
    { day: 211, psalm: "61", gospel: "Mark 14", wisdom: "Proverbs 22", oldTestament: "Ezekiel 35-36", newTestament: "Philippians 4" },
    { day: 212, psalm: "62", gospel: "Mark 15", wisdom: "Proverbs 23", oldTestament: "Ezekiel 37-38", newTestament: "Colossians 1" },
    { day: 213, psalm: "63", gospel: "Mark 16", wisdom: "Proverbs 24", oldTestament: "Ezekiel 39-40", newTestament: "Colossians 2" },
    { day: 214, psalm: "64", gospel: "Luke 1", wisdom: "Proverbs 25", oldTestament: "Ezekiel 41-42", newTestament: "Colossians 3" },
    { day: 215, psalm: "65", gospel: "Luke 2", wisdom: "Proverbs 26", oldTestament: "Ezekiel 43-45", newTestament: "Colossians 4" },
    { day: 216, psalm: "66", gospel: "Luke 3", wisdom: "Proverbs 27", oldTestament: "Ezekiel 46-48", newTestament: "1 Thessalonians 1" },
    { day: 217, psalm: "67", gospel: "Luke 4", wisdom: "Proverbs 28", oldTestament: "Daniel 1-2", newTestament: "1 Thessalonians 2" },
    { day: 218, psalm: "68", gospel: "Luke 5", wisdom: "Proverbs 29", oldTestament: "Daniel 3", newTestament: "1 Thessalonians 3" },
    { day: 219, psalm: "69", gospel: "Luke 6", wisdom: "Proverbs 30", oldTestament: "Daniel 4-6", newTestament: "1 Thessalonians 4" },
    { day: 220, psalm: "70", gospel: "Luke 7", wisdom: "Proverbs 31", oldTestament: "Daniel 7-9", newTestament: "1 Thessalonians 5" },
    { day: 221, psalm: "71", gospel: "Luke 8", wisdom: "Ecclesiastes 1-2", oldTestament: "Daniel 10-12", newTestament: "2 Thessalonians 1" },
    { day: 222, psalm: "72", gospel: "Luke 9", wisdom: "Ecclesiastes 3-4", oldTestament: "Daniel 13", newTestament: "2 Thessalonians 2" },
    { day: 223, psalm: "73", gospel: "Luke 10", wisdom: "Ecclesiastes 5-6", oldTestament: "Daniel 14", newTestament: "2 Thessalonians 3" },
    { day: 224, psalm: "74", gospel: "Luke 11", wisdom: "Ecclesiastes 7-8", oldTestament: "Obadiah 1", newTestament: "1 Timothy 1" },
    { day: 225, psalm: "75", gospel: "Luke 12", wisdom: "Ecclesiastes 9-10", oldTestament: "Haggai 1-2", newTestament: "1 Timothy 2" },
    { day: 226, psalm: "76", gospel: "Luke 13", wisdom: "Ecclesiastes 11-12", oldTestament: "Zechariah 1-5", newTestament: "1 Timothy 3" },
    { day: 227, psalm: "77", gospel: "Luke 14", wisdom: "Song of Songs 1-2", oldTestament: "Zechariah 6-9", newTestament: "1 Timothy 4" },
    { day: 228, psalm: "78", gospel: "Luke 15", wisdom: "Song of Songs 3-4", oldTestament: "Zechariah 10-14", newTestament: "1 Timothy 5" },
    { day: 229, psalm: "79", gospel: "Luke 16", wisdom: "Song of Songs 5-6", oldTestament: "Malachi 1-4", newTestament: "1 Timothy 6" },
    { day: 230, psalm: "80", gospel: "Luke 17", wisdom: "Song of Songs 7-8", oldTestament: "Joel 1-3", newTestament: "2 Timothy 1" },
    { day: 231, psalm: "81", gospel: "Luke 18", wisdom: "Wisdom 1", oldTestament: "Jonah 1-4", newTestament: "2 Timothy 2" },
    { day: 232, psalm: "82", gospel: "Luke 19", wisdom: "Wisdom 2", oldTestament: "1 Chronicles 1", newTestament: "2 Timothy 3" },
    { day: 233, psalm: "83", gospel: "Luke 20", wisdom: "Wisdom 3", oldTestament: "1 Chronicles 2-3", newTestament: "2 Timothy 4" },
    { day: 234, psalm: "84", gospel: "Luke 21", wisdom: "Wisdom 4", oldTestament: "1 Chronicles 4-5", newTestament: "Titus 1" },
    { day: 235, psalm: "85", gospel: "Luke 22", wisdom: "Wisdom 5", oldTestament: "1 Chronicles 6", newTestament: "Titus 2" },
    { day: 236, psalm: "86", gospel: "Luke 23", wisdom: "Wisdom 6", oldTestament: "1 Chronicles 7-8", newTestament: "Titus 3" },
    { day: 237, psalm: "87", gospel: "Luke 24", wisdom: "Wisdom 7", oldTestament: "1 Chronicles 9-10", newTestament: "Philemon 1" },
    { day: 238, psalm: "88", gospel: "Acts 1", wisdom: "Wisdom 8", oldTestament: "1 Chronicles 11-12", newTestament: "Hebrews 1" },
    { day: 239, psalm: "89", gospel: "Acts 2", wisdom: "Wisdom 9", oldTestament: "1 Chronicles 13-15", newTestament: "Hebrews 2" },
    { day: 240, psalm: "90", gospel: "Acts 3", wisdom: "Wisdom 10", oldTestament: "1 Chronicles 16-17", newTestament: "Hebrews 3" },
    { day: 241, psalm: "91", gospel: "Acts 4", wisdom: "Wisdom 11", oldTestament: "1 Chronicles 18-21", newTestament: "Hebrews 4" },
    { day: 242, psalm: "92", gospel: "Acts 5", wisdom: "Wisdom 12", oldTestament: "1 Chronicles 22-24", newTestament: "Hebrews 5" },
    { day: 243, psalm: "93", gospel: "Acts 6", wisdom: "Wisdom 13", oldTestament: "1 Chronicles 25-26", newTestament: "Hebrews 6" },
    { day: 244, psalm: "94", gospel: "Acts 7", wisdom: "Wisdom 14", oldTestament: "1 Chronicles 27-29", newTestament: "Hebrews 7" },
    { day: 245, psalm: "95", gospel: "Acts 8", wisdom: "Wisdom 15", oldTestament: "2 Chronicles 1-4", newTestament: "Hebrews 8" },
    { day: 246, psalm: "96", gospel: "Acts 9", wisdom: "Wisdom 16", oldTestament: "2 Chronicles 5-7", newTestament: "Hebrews 9" },
    { day: 247, psalm: "97", gospel: "Acts 10", wisdom: "Wisdom 17", oldTestament: "2 Chronicles 8-10", newTestament: "Hebrews 10" },
    { day: 248, psalm: "98", gospel: "Acts 11", wisdom: "Wisdom 18", oldTestament: "2 Chronicles 11-13", newTestament: "Hebrews 11" },
    { day: 249, psalm: "99", gospel: "Acts 12", wisdom: "Wisdom 19", oldTestament: "2 Chronicles 14-17", newTestament: "Hebrews 12" },
    { day: 250, psalm: "100", gospel: "Acts 13", wisdom: "Sirach 1", oldTestament: "2 Chronicles 18-20", newTestament: "Hebrews 13" },
    { day: 251, psalm: "101", gospel: "Acts 14", wisdom: "Sirach 2", oldTestament: "2 Chronicles 21-23", newTestament: "James 1" },
    { day: 252, psalm: "102", gospel: "Acts 15", wisdom: "Sirach 3", oldTestament: "2 Chronicles 24-26", newTestament: "James 2" },
    { day: 253, psalm: "103", gospel: "Acts 16", wisdom: "Sirach 4", oldTestament: "2 Chronicles 27-29", newTestament: "James 3" },
    { day: 254, psalm: "104", gospel: "Acts 17", wisdom: "Sirach 5", oldTestament: "2 Chronicles 30-32", newTestament: "James 4" },
    { day: 255, psalm: "105", gospel: "Acts 18", wisdom: "Sirach 6", oldTestament: "2 Chronicles 33-34", newTestament: "James 5" },
    { day: 256, psalm: "106", gospel: "Acts 19", wisdom: "Sirach 7", oldTestament: "2 Chronicles 35-36", newTestament: "1 Peter 1" },
    { day: 257, psalm: "107", gospel: "Acts 20", wisdom: "Sirach 8", oldTestament: "Ezra 1-2", newTestament: "1 Peter 2" },
    { day: 258, psalm: "108", gospel: "Acts 21", wisdom: "Sirach 9", oldTestament: "Ezra 3-6", newTestament: "1 Peter 3" },
    { day: 259, psalm: "109", gospel: "Acts 22", wisdom: "Sirach 10", oldTestament: "Ezra 7-8", newTestament: "1 Peter 4" },
    { day: 260, psalm: "110", gospel: "Acts 23", wisdom: "Sirach 11", oldTestament: "Ezra 9-10", newTestament: "1 Peter 5" },
    { day: 261, psalm: "111", gospel: "Acts 24", wisdom: "Sirach 12", oldTestament: "Nehemiah 1-3", newTestament: "2 Peter 1" },
    { day: 262, psalm: "112", gospel: "Acts 25", wisdom: "Sirach 13", oldTestament: "Nehemiah 4-6", newTestament: "2 Peter 2" },
    { day: 263, psalm: "113", gospel: "Acts 26", wisdom: "Sirach 14", oldTestament: "Nehemiah 7", newTestament: "2 Peter 3" },
    { day: 264, psalm: "114", gospel: "Acts 27", wisdom: "Sirach 15", oldTestament: "Nehemiah 8-9", newTestament: "1 John 1" },
    { day: 265, psalm: "115", gospel: "Acts 28", wisdom: "Sirach 16", oldTestament: "Nehemiah 10-11", newTestament: "1 John 2" },
    { day: 266, psalm: "116", gospel: "Genesis 2-3", wisdom: "Sirach 17", oldTestament: "Nehemiah 12-13", newTestament: "1 John 3" },
    { day: 267, psalm: "117", gospel: "Genesis 12", wisdom: "Sirach 18", oldTestament: "Tobit 1-3", newTestament: "1 John 4" },
    { day: 268, psalm: "118", gospel: "Genesis 15", wisdom: "Sirach 19", oldTestament: "Tobit 4-6", newTestament: "1 John 5" },
    { day: 269, psalm: "119", gospel: "Genesis 22", wisdom: "Sirach 20", oldTestament: "Tobit 7-10", newTestament: "2 John 1" },
    { day: 270, psalm: "120", gospel: "Genesis 28", wisdom: "Sirach 21", oldTestament: "Tobit 11-14", newTestament: "3 John 1" },
    { day: 271, psalm: "121", gospel: "Genesis 32", wisdom: "Sirach 22", oldTestament: "Judith 1-4", newTestament: "Jude 1" },
    { day: 272, psalm: "122", gospel: "Exodus 3", wisdom: "Sirach 23", oldTestament: "Judith 5-7", newTestament: "Revelation 1" },
    { day: 273, psalm: "123", gospel: "Exodus 12", wisdom: "Sirach 24", oldTestament: "Judith 8-9", newTestament: "Revelation 2" },
    { day: 274, psalm: "124", gospel: "Exodus 14", wisdom: "Sirach 25", oldTestament: "Judith 10-12", newTestament: "Revelation 3" },
    { day: 275, psalm: "125", gospel: "Exodus 19-20", wisdom: "Sirach 26", oldTestament: "Judith 13-16", newTestament: "Revelation 4" },
    { day: 276, psalm: "126", gospel: "Exodus 32", wisdom: "Sirach 27", oldTestament: "Esther 11:2-12, 12:1-6; Esther 1-3:13; Esther 13:1-7; Esther 3:14-15", newTestament: "Revelation 5" },
    { day: 277, psalm: "127", gospel: "Leviticus 16", wisdom: "Sirach 28", oldTestament: "Esther 4-4:17; Esther 13:8-18, 14:1-19; Esther 5:1-2; Esther 15:1-16; Esther 5:3-14", newTestament: "Revelation 6" },
    { day: 278, psalm: "128", gospel: "Numbers 11", wisdom: "Sirach 29", oldTestament: "Esther 6-8:12; Esther 16:1-24; Esther 8:13-17", newTestament: "Revelation 7" },
    { day: 279, psalm: "129", gospel: "Numbers 13", wisdom: "Sirach 30", oldTestament: "Esther 9-10:3; Esther 10:4-13, 11:1", newTestament: "Revelation 8" },
    { day: 280, psalm: "130", gospel: "Deuteronomy 6", wisdom: "Sirach 31", oldTestament: "1 Maccabees 1", newTestament: "Revelation 9" },
    { day: 281, psalm: "131", gospel: "Deuteronomy 30", wisdom: "Sirach 32", oldTestament: "1 Maccabees 2", newTestament: "Revelation 10" },
    { day: 282, psalm: "132", gospel: "Joshua 1", wisdom: "Sirach 33", oldTestament: "1 Maccabees 3", newTestament: "Revelation 11" },
    { day: 283, psalm: "133", gospel: "Joshua 24", wisdom: "Sirach 34", oldTestament: "1 Maccabees 4", newTestament: "Revelation 12" },
    { day: 284, psalm: "134", gospel: "Judges 2", wisdom: "Sirach 35", oldTestament: "1 Maccabees 5", newTestament: "Revelation 13" },
    { day: 285, psalm: "135", gospel: "1 Samuel 8", wisdom: "Sirach 36", oldTestament: "1 Maccabees 6", newTestament: "Revelation 14" },
    { day: 286, psalm: "136", gospel: "1 Samuel 16", wisdom: "Sirach 37", oldTestament: "1 Maccabees 7-8", newTestament: "Revelation 15" },
    { day: 287, psalm: "137", gospel: "2 Samuel 7", wisdom: "Sirach 38", oldTestament: "1 Maccabees 9", newTestament: "Revelation 16" },
    { day: 288, psalm: "138", gospel: "2 Samuel 12", wisdom: "Sirach 39", oldTestament: "1 Maccabees 10", newTestament: "Revelation 17" },
    { day: 289, psalm: "139", gospel: "1 Kings 8", wisdom: "Sirach 40", oldTestament: "1 Maccabees 11", newTestament: "Revelation 18" },
    { day: 290, psalm: "140", gospel: "1 Kings 11", wisdom: "Sirach 41", oldTestament: "1 Maccabees 12", newTestament: "Revelation 19" },
    { day: 291, psalm: "141", gospel: "1 Kings 18", wisdom: "Sirach 42", oldTestament: "1 Maccabees 13-14", newTestament: "Revelation 20" },
    { day: 292, psalm: "142", gospel: "2 Kings 17", wisdom: "Sirach 43", oldTestament: "1 Maccabees 15-16", newTestament: "Revelation 21" },
    { day: 293, psalm: "143", gospel: "2 Kings 25", wisdom: "Sirach 44", oldTestament: "2 Maccabees 1-2", newTestament: "Revelation 22" },
    { day: 294, psalm: "144", gospel: "Ezra 1", wisdom: "Sirach 45", oldTestament: "2 Maccabees 3", newTestament: "Isaiah 55" },
    { day: 295, psalm: "145", gospel: "Ezra 9", wisdom: "Sirach 46", oldTestament: "2 Maccabees 4-5", newTestament: "Isaiah 1" },
    { day: 296, psalm: "146", gospel: "Nehemiah 8", wisdom: "Sirach 47", oldTestament: "2 Maccabees 6-7", newTestament: "Ezekiel 18" },
    { day: 297, psalm: "147", gospel: "Isaiah 53", wisdom: "Sirach 48", oldTestament: "2 Maccabees 8-9", newTestament: "Deuteronomy 10" },
    { day: 298, psalm: "148", gospel: "Jeremiah 31", wisdom: "Sirach 49", oldTestament: "2 Maccabees 10-11", newTestament: "Micah 6" },
    { day: 299, psalm: "149", gospel: "Ezekiel 36", wisdom: "Sirach 50", oldTestament: "2 Maccabees 12-13", newTestament: "Tobit 4" },
    { day: 300, psalm: "150", gospel: "Malachi 3", wisdom: "Sirach 51", oldTestament: "2 Maccabees 14-15", newTestament: "Baruch 4" }
];

// Export for use in app.js
if (typeof window !== 'undefined') {
    window.readingPlan = readingPlan;
}