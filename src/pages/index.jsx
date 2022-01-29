import Articles from 'components/Articles';
import Hero from 'components/index/Hero';
import Layout from 'layouts/Layout';

export default function Home({ page_info }) {
  return (
    <Layout>
      <Hero />
      <Articles page_info={page_info} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const next_cursor_value = context.query.next_cursor;

  const { Client } = require('@notionhq/client');

  const notion = new Client({ auth: 'secret_UST3pw9ETq5xR4XMcgLcdnHAW9WIIqSg8Dc76RyfGfX' });

  const databaseId = 'c510f8afeb674d9ba2d87ac69a86428a';
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 6,
    start_cursor: next_cursor_value,
  });
  console.log(response);
  const next_cursor = response.next_cursor;

  const pages = response.results;
  const page_total_num = pages.length;
  const page_num = 2;
  const page_list = pages.map((page) => {
    const page_id = page.id;
    const page_title = page.properties['記事'].title[0].plain_text;
    const page_created_time = page.created_time;
    const tag_list = page.properties['タグ'].multi_select.map((tag) => {
      return tag.name;
    });
    return [page_id, page_title, page_created_time, tag_list];
  });
  const page_info = { pages: page_list, next_cursor: next_cursor };
  return { props: { page_info } };
}
