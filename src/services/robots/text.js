import algorithmia from "algorithmia";

async function robot(content) {
  console.log(`Recebi com sucesso o content: ${content.searchTerm}`);

  await fetchContentFromWikipedia(content);

  //Download Wikipedia Text
  async function fetchContentFromWikipedia(content) {
    console.log( process.client)
    console.log("> [text-robot] Fetching content from Wikipedia");
    const algorithmiaAuthenticated = algorithmia(process.env.algorithmia_ApiKey);
    const wikipediaAlgorithm = algorithmiaAuthenticated.algo("web/WikipediaParser/0.1.2");
    console.log(wikipediaAlgorithm);
    const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm);
    console.log(wikipediaResponse);
    
    const wikipediaContent = wikipediaResponse.get();

    content.sourceContentOriginal = wikipediaContent.content;
    console.log("> [text-robot] Fetching done!");
  }
}

function breakContentIntoSentences(content) {
  content.sentences = [];

  const sentences = sentenceBoundaryDetection.sentences(
    content.sourceContentSanitized
  );
  sentences.forEach(sentence => {
    content.sentences.push({
      text: sentence,
      keywords: [],
      images: []
    });
  });
}

export { robot };
