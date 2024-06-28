import styled from 'styled-components'
import { LoginWith } from '../login/loginWith'
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`
const P = styled.p`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

const Input = styled.input`
  width: 400px;
  height: 45px;
  flex-shrink: 0;
  fill: #fff;
  stroke-width: 0.5px;
  stroke: #858585;
  border-radius: 5px;
  border: 1px solid var(--C1-D, #d1d1d1);
`

const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.3s ease;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
    &:after {
      content: '';
      display: block;
      background-color: #fff;
      border-radius: 50%;
      height: 10px;
      width: 10px;
      margin: 4px;
    }
  }
`

const Lable = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 40px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  outline: none;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
    &:after {
      content: '\\2713';
      color: #fff;
      display: block;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
    }
  }
`

const Button = styled.button`
  width: 400px;
  height: 55px;
  background: #6a983c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 40px;
  cursor: pointer;
  border: none;

  &:hover {
    color: #5ae622;
  }
`

export const Register = () => {
  return (
    <Div>
      <div style={{ marginRight: '50px' }}>
        <P>メールアドレス</P>
        <Input type='text'></Input>
        <P>パスワード（半角英数８桁以上）</P>
        <Input type='password'></Input>
        <P>パスワード再確認</P>
        <Input type='password'></Input>
        <P>ニックネーム</P>
        <Input type='text'></Input>
        <div style={{ marginTop: '20px', display: 'flex' }}>
          <MenuItem>
            <Radio id='male' name='gender' value='male' />
            <Lable htmlFor='male'>男性</Lable>
          </MenuItem>
          <MenuItem>
            <Radio id='female' name='gender' value='female' />
            <Lable htmlFor='female'>女性</Lable>
          </MenuItem>
          <MenuItem>
            <Radio id='other' name='gender' value='other' />
            <Lable htmlFor='other'>その他</Lable>
          </MenuItem>
        </div>
        <P>都道府県を選んでください</P>
        <Input type='text'></Input>
        <P>生年月日（年代のみ公開されます）</P>
        <Input type='date'></Input>
        <MenuItem>
          <div style={{ marginRight: '30px' }}>
            <P>姓 (非公開)</P>
            <Input type='text' style={{ width: '182.609px' }}></Input>
          </div>
          <div>
            <P>名 (非公開)</P>
            <Input type='text' style={{ width: '182.609px' }}></Input>
          </div>
        </MenuItem>
        <P> (任意) 友達紹介コード</P>
        <Input type='text'></Input>
        <div style={{ marginTop: '20px', display: 'flex' }}>
          <Checkbox />
          <Lable style={{ color: '#6A983C' }}>
            利用規約 と プライバシーポリシー
          </Lable>
        </div>
        <Button>同意して登録（無料）</Button>
      </div>
      <LoginWith></LoginWith>
    </Div>
  )
}
