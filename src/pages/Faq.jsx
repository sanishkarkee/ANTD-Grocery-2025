import { Collapse, ConfigProvider } from 'antd';
import React from 'react';

const DeliveryAndOptimization = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const WhatDoINeed = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const ReturnsRefunds = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const ManagingAccount = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const TechnicalIssues = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const TermsCondition = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const RatingReviews = () => {
  return (
    <p>
      Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro,
      solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te
      his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam
      audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos
      velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea
      antiopam complectitur, persius necessitatibus at ius. Ut sed oblique
      intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent
      in. Utamur prodesset mei et.
    </p>
  );
};

const items = [
  {
    key: '1',
    label: 'Delivery and collection information',
    children: <DeliveryAndOptimization />,
  },
  {
    key: '2',
    label: 'What do I need to know about ordering online?',
    children: <WhatDoINeed />,
  },
  {
    key: '3',
    label: 'Returns and refunds',
    children: <ReturnsRefunds />,
  },
  ,
  {
    key: '4',
    label: 'Managing my account',
    children: <ManagingAccount />,
  },
  {
    key: '5',
    label: 'Technical issues',
    children: <TechnicalIssues />,
  },
  {
    key: '6',
    label: 'Terms and conditions',
    children: <TermsCondition />,
  },
  {
    key: '7',
    label: 'Ratings and reviews',
    children: <RatingReviews />,
  },
];

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='block faqPage'>
      <div className='container'>
        <h2>FAQ</h2>

        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                borderRadius: 0,
              },
            },
          }}
        >
          <Collapse
            items={items}
            accordion
            defaultActiveKey={['1']}
            onChange={onChange}
            size='middle'
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Faq;
