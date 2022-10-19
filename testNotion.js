import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();
export const main = async () => {
  try {
    // const collectionData = await notion.getCollectionData('50435df0-2f6f-4788-9ea0-44852d91f6c5', '', '');
    // console.log('collectionData', collectionData);
    const recordMap = await notion.getPage('ee727016c76f4bffa445f8ff492e5d76', {
      fetchCollections: true,
    });

    const pages = Object.keys(recordMap.block).filter((k) => recordMap.block[k].value.type === 'page').map((k) => recordMap.block[k]);

    console.log(JSON.stringify(recordMap, null, 2));
    console.log('pages', pages);
  } catch (error) {
    console.error(error);
  }
};

main();
