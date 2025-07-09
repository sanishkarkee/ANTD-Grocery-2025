import { Avatar, Col, Divider, List, Row, Tag } from 'antd';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';

import img1 from '../../assets/images/img-footer1.jpg';
import img2 from '../../assets/images/img-footer2.jpg';
import img3 from '../../assets/images/img-footer3.jpg';

const featured = [
  {
    image: img1,
    title: 'Kelloggs Crunchy Nut Hazelnut',
    cost: '£2.50',
    link: 'https://www.google.com/',
  },
  {
    image: img2,
    title: 'Branston Baked Beans in a Rich',
    cost: '£3.50',
    link: 'https://www.google.com/',
  },
  {
    image: img3,
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    cost: '£2.50',
    link: 'https://www.google.com/',
  },
];

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const FooterWidget = () => {
  return (
    <>
      <div className='footerWidget'>
        <div className='container'>
          <Row gutter={24}>
            {/* Featured */}
            <Col md={6}>
              <h3>Featured</h3>
              <List
                itemLayout='horizontal'
                dataSource={featured}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.image} />}
                      title={<a href={item.link}>{item.title}</a>}
                      description={item.cost}
                    />
                  </List.Item>
                )}
              />
            </Col>

            {/* Top Rated */}
            <Col md={6}>
              <h3>Top Rated</h3>
              <List
                itemLayout='horizontal'
                dataSource={featured}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.image} />}
                      title={<a href={item.link}>{item.title}</a>}
                      description={item.cost}
                    />
                  </List.Item>
                )}
              />
            </Col>

            {/* Tags */}
            <Col md={6}>
              <h3>Tags</h3>

              <div className='tags'>
                <Tag>Frozen</Tag>
                <Tag>
                  <a href='https://github.com/ant-design/ant-design/issues/1862'>
                    Kitchen
                  </a>
                </Tag>
                <Tag closeIcon>Drinks</Tag>
                <Tag closeIcon>Beer & Wine</Tag>
                <Tag closeIcon>chocolates</Tag>
              </div>
            </Col>

            {/* Recent Posts */}
            <Col md={6}>
              <h3>Recent Posts</h3>
              <List
                size='small'
                className='recentPost'
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FooterWidget;
