import { useState } from 'react';
import { Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import { CounterContainer, StyledButton } from './counter.styles';

function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <CounterContainer>
      <Space size='middle'>
        <StyledButton type="primary" icon={<MinusOutlined />} onClick={decrement} />
        {count}
        <StyledButton type="primary" icon={<PlusOutlined />} onClick={increment} />
      </Space>
    </CounterContainer>
  );
};

export default Counter;
