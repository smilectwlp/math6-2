import React, { useState } from 'react';

const MathApp = () => {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeSubUnit, setActiveSubUnit] = useState(null);

  const units = [
    {
      id: 1,
      title: '1. 분수의 나눗셈',
      subUnits: [
        {
          id: '1-1',
          title: '분수의 나눗셈의 의미',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">분수의 나눗셈의 의미</h3>
              <p className="mb-2">분수의 나눗셈은 '몇 번 들어가는가'의 의미를 갖습니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">예시:</p>
                <p>2 ÷ 1/3 = 6 (1/3이 2에 6번 들어감)</p>
              </div>
              <h3 className="text-lg font-bold mb-2">분수의 나눗셈 공식</h3>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">분수 ÷ 분수의 계산법:</p>
                <p>÷를 ×로 바꾸고 나누는 분수를 뒤집는다.</p>
                <p className="mt-2">a/b ÷ c/d = a/b × d/c = (a×d)/(b×c)</p>
              </div>
            </div>
          )
        },
        {
          id: '1-2',
          title: '분수의 나눗셈 활용',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">분수의 나눗셈 활용하기</h3>
              <p className="mb-3">분수의 나눗셈은 실생활 문제 해결에 활용됩니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">문제 예시:</p>
                <p>2/3m 리본을 1/4m씩 자르면 몇 개를 만들 수 있을까요?</p>
                <p className="mt-2">풀이: 2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3 = 2 2/3개</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">핵심 개념:</p>
                <ul className="list-disc pl-5">
                  <li>나눗셈의 몫은 '포함된 횟수'를 의미합니다.</li>
                  <li>나눗셈과 곱셈의 관계를 이해하는 것이 중요합니다.</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 2,
      title: '2. 소수의 나눗셈',
      subUnits: [
        {
          id: '2-1',
          title: '소수의 나눗셈의 원리',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">소수의 나눗셈 원리</h3>
              <p className="mb-3">소수의 나눗셈은 자연수의 나눗셈과 같은 원리로 계산할 수 있습니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">소수 ÷ 소수 계산 방법:</p>
                <p>나누는 수와 나누어지는 수에 같은 10의 거듭제곱을 곱하여 나누는 수를 자연수로 바꾸어 계산합니다.</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">공식 및 예시:</p>
                <p>1.5 ÷ 0.3 = 15 ÷ 3 = 5</p>
                <p className="mt-2">0.24 ÷ 0.06 = 24 ÷ 6 = 4</p>
              </div>
            </div>
          )
        },
        {
          id: '2-2',
          title: '소수의 나눗셈 연산',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">소수의 나눗셈 연산 방법</h3>
              <p className="mb-3">소수점 이동 규칙을 이용하여 소수의 나눗셈을 계산합니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">계산 과정:</p>
                <ol className="list-decimal pl-5">
                  <li>나누는 수를 자연수로 만들기 위해 소수점을 이동시킵니다.</li>
                  <li>나누어지는 수도 같은 자릿수만큼 소수점을 이동시킵니다.</li>
                  <li>자연수 나눗셈으로 계산합니다.</li>
                </ol>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">예시:</p>
                <p>4.5 ÷ 0.15 = 45 ÷ 1.5 = 450 ÷ 15 = 30</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 3,
      title: '3. 비와 비율',
      subUnits: [
        {
          id: '3-1',
          title: '비의 개념과 표현',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">비의 개념과 표현 방법</h3>
              <p className="mb-3">비는 두 수량의 관계를 나타내는 방법입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">비의 표현:</p>
                <p>a : b 형태로 표현하며, 이때 a를 전항, b를 후항이라고 합니다.</p>
                <p className="mt-2">또한 분수 형태 a/b로도 표현할 수 있습니다.</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">핵심 개념:</p>
                <ul className="list-disc pl-5">
                  <li>비는 두 수의 상대적인 크기를 비교합니다.</li>
                  <li>비는 같은 종류의 양을 비교할 때도 사용하고, 다른 종류의 양을 비교할 때도 사용합니다.</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: '3-2',
          title: '비율과 백분율',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">비율과 백분율</h3>
              <p className="mb-3">비율은 비를 분수나 소수로 나타낸 값이며, 백분율은 비율을 백분수로 나타낸 것입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">비율 계산:</p>
                <p>비율 = 비교하는 양 ÷ 기준량</p>
                <p className="mt-2">백분율(%) = 비율 × 100</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">예시:</p>
                <p>30명 중 12명이 합격했다면, 합격한 비율은 12 ÷ 30 = 0.4 또는 40%입니다.</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 4,
      title: '4. 비례식과 비례배분',
      subUnits: [
        {
          id: '4-1',
          title: '비례식의 성질',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">비례식의 성질</h3>
              <p className="mb-3">비례식은 두 비가 같음을 나타내는 식입니다. a : b = c : d로 표현합니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">비례식의 기본 성질:</p>
                <p>a : b = c : d 이면 a × d = b × c 입니다. (교차곱셈)</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">비례식의 활용:</p>
                <p>a : b = c : d 일 때, 다음과 같이 변형할 수 있습니다.</p>
                <p className="mt-2">a : c = b : d</p>
                <p>(a + b) : b = (c + d) : d</p>
              </div>
            </div>
          )
        },
        {
          id: '4-2',
          title: '비례배분',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">비례배분</h3>
              <p className="mb-3">비례배분은 주어진 양을 주어진 비에 따라 나누는 것입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">비례배분 방법:</p>
                <ol className="list-decimal pl-5">
                  <li>전체 비율을 구합니다. (비의 합)</li>
                  <li>비율에 따른 각 부분을 계산합니다.</li>
                </ol>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">예시:</p>
                <p>720원을 3 : 5로 나누면?</p>
                <p className="mt-1">전체 비율: 3 + 5 = 8</p>
                <p>첫 번째 부분: 720 × (3/8) = 270원</p>
                <p>두 번째 부분: 720 × (5/8) = 450원</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 5,
      title: '5. 원주율과 원의 넓이',
      subUnits: [
        {
          id: '5-1',
          title: '원주와 원주율',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">원주와 원주율의 개념</h3>
              <p className="mb-3">원주는 원의 둘레를 의미하며, 원주율(π)은 원주와 지름의 비율입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">원주 공식:</p>
                <p>원주 = 지름 × 원주율(π) = 2 × 반지름 × 원주율(π)</p>
                <p className="mt-2">(원주율(π)는 약 3.14 또는 3.141592...)</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">원주율(π):</p>
                <ul className="list-disc pl-5">
                  <li>어떤 원이든 (원주 ÷ 지름)의 값은 항상 일정합니다.</li>
                  <li>이 값을 원주율(π)이라고 합니다.</li>
                  <li>원주율(π)는 무리수이지만, 계산에서는 보통 3.14를 사용합니다.</li>
                </ul>
              </div>
              <div className="bg-green-100 p-3 rounded-md mt-3">
                <p className="font-bold mb-1">예시:</p>
                <p>반지름이 7cm인 원의 원주는?</p>
                <p className="mt-1">원주 = 2 × 3.14 × 7 = 43.96cm</p>
              </div>
            </div>
          )
        },
        {
          id: '5-2',
          title: '원의 넓이 공식',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">원의 넓이 공식</h3>
              <p className="mb-3">원의 넓이는 반지름의 제곱에 π(원주율)를 곱하여 구합니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">원의 넓이 공식:</p>
                <p>원의 넓이 = 원주율(π) × r²</p>
                <p className="mt-2">(r은 반지름, 원주율(π)는 약 3.14)</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">예시:</p>
                <p>반지름이 5cm인 원의 넓이는?</p>
                <p className="mt-1">넓이 = 3.14 × 5² = 3.14 × 25 = 78.5cm²</p>
              </div>
            </div>
          )
        },
        {
          id: '5-3',
          title: '원의 넓이 활용',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">원의 넓이 활용하기</h3>
              <p className="mb-3">원의 넓이 공식을 활용하여 다양한 문제를 해결할 수 있습니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">관련 개념:</p>
                <ul className="list-disc pl-5">
                  <li>원의 일부분인 부채꼴의 넓이: (θ/360°) × 원주율(π) × r²</li>
                  <li>원과 관련된 도형의 넓이 구하기</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">문제 예시:</p>
                <p>반지름이 6cm인 원에 내접하는 정사각형의 넓이는?</p>
                <p className="mt-1">정사각형의 한 변의 길이 = 6 × √2 = 8.49cm</p>
                <p>정사각형의 넓이 = 8.49² = 72cm²</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 6,
      title: '6. 원기둥, 원뿔, 구의 개념',
      subUnits: [
        {
          id: '6-1',
          title: '원기둥의 특징과 부피',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">원기둥의 특징과 부피</h3>
              <p className="mb-3">원기둥은 두 개의 원형 밑면과 옆면인 직사각형으로 이루어진 입체도형입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">원기둥의 부피 공식:</p>
                <p>원기둥의 부피 = 밑면의 넓이 × 높이 = 원주율(π) × r² × h</p>
                <p className="mt-2">(r은 밑면의 반지름, h는 높이)</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">원기둥의 겉넓이:</p>
                <p>원기둥의 겉넓이 = 2 × 밑면의 넓이 + 옆면의 넓이</p>
                <p className="mt-1">= 2 × 원주율(π) × r² + 2 × 원주율(π) × r × h</p>
                <p className="mt-1">= 2 × 원주율(π) × r × (r + h)</p>
              </div>
            </div>
          )
        },
        {
          id: '6-2',
          title: '원뿔과 구의 특징',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">원뿔과 구의 특징</h3>
              <p className="mb-3">원뿔은 원형 밑면과 곡면으로 이루어진 도형이며, 구는 모든 점이 중심으로부터 같은 거리에 있는 입체도형입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">원뿔의 부피 공식:</p>
                <p>원뿔의 부피 = (1/3) × 밑면의 넓이 × 높이 = (1/3) × 원주율(π) × r² × h</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">구의 부피와 겉넓이:</p>
                <p>구의 부피 = (4/3) × 원주율(π) × r³</p>
                <p className="mt-1">구의 겉넓이 = 4 × 원주율(π) × r²</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 7,
      title: '7. 정수와 유리수',
      subUnits: [
        {
          id: '7-1',
          title: '정수의 개념',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">정수의 개념</h3>
              <p className="mb-3">정수는 양의 정수, 0, 음의 정수를 모두 포함하는 수입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">정수의 구성:</p>
                <ul className="list-disc pl-5">
                  <li>양의 정수: 1, 2, 3, ...</li>
                  <li>0</li>
                  <li>음의 정수: -1, -2, -3, ...</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">정수의 성질:</p>
                <ul className="list-disc pl-5">
                  <li>덧셈에 대한 교환법칙: a + b = b + a</li>
                  <li>덧셈에 대한 결합법칙: (a + b) + c = a + (b + c)</li>
                  <li>0은 덧셈의 항등원: a + 0 = a</li>
                  <li>음수는 덧셈의 역원: a + (-a) = 0</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: '7-2',
          title: '유리수의 개념',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">유리수의 개념</h3>
              <p className="mb-3">유리수는 분수 형태 a/b (b≠0)로 나타낼 수 있는 수입니다. 정수, 유한소수, 순환소수를 포함합니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">유리수의 예:</p>
                <ul className="list-disc pl-5">
                  <li>정수: -3, -2, -1, 0, 1, 2, 3, ...</li>
                  <li>유한소수: 0.5, 1.25, -2.75, ...</li>
                  <li>순환소수: 0.333..., 0.272727..., ...</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">유리수의 성질:</p>
                <ul className="list-disc pl-5">
                  <li>유리수는 수직선 위에 나타낼 수 있습니다.</li>
                  <li>유리수끼리의 덧셈, 뺄셈, 곱셈, 나눗셈(0으로 나누는 경우 제외)의 결과는 항상 유리수입니다.</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 8,
      title: '8. 통계 자료의 정리와 해석',
      subUnits: [
        {
          id: '8-1',
          title: '도수분포표와 히스토그램',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">도수분포표와 히스토그램</h3>
              <p className="mb-3">도수분포표는 자료를 구간별로 정리한 표이고, 히스토그램은 이를 시각적으로 표현한 그래프입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">도수분포표 용어:</p>
                <ul className="list-disc pl-5">
                  <li>계급: 자료를 분류한 구간</li>
                  <li>계급의 크기: 구간의 너비</li>
                  <li>도수: 각 계급에 속하는 자료의 개수</li>
                  <li>상대도수: 도수 ÷ 전체 도수</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">히스토그램 특징:</p>
                <ul className="list-disc pl-5">
                  <li>가로축: 계급, 세로축: 도수</li>
                  <li>막대의 면적은 도수에 비례</li>
                  <li>계급의 크기가 같을 때는 막대의 높이가 도수에 비례</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: '8-2',
          title: '평균과 중앙값',
          content: (
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">평균과 중앙값</h3>
              <p className="mb-3">평균과 중앙값은 자료의 대표값을 나타내는 통계량입니다.</p>
              <div className="bg-blue-100 p-3 rounded-md mb-3">
                <p className="font-bold">평균 구하기:</p>
                <p>평균 = 모든 자료의 값의 합 ÷ 자료의 개수</p>
                <p className="mt-2 font-bold">도수분포표에서 평균 구하기:</p>
                <p>평균 = Σ(계급값 × 도수) ÷ 전체 도수</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="font-bold mb-1">중앙값 구하기:</p>
                <p>자료를 크기순으로 나열했을 때 가운데 위치한 값</p>
                <p className="mt-2">자료의 개수가 홀수일 때: 가운데 값</p>
                <p>자료의 개수가 짝수일 때: 가운데 두 값의 평균</p>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const handleUnitClick = (unitId) => {
    if (activeUnit === unitId) {
      setActiveUnit(null);
      setActiveSubUnit(null);
    } else {
      setActiveUnit(unitId);
      setActiveSubUnit(null);
    }
  };

  const handleSubUnitClick = (subUnitId) => {
    setActiveSubUnit(subUnitId === activeSubUnit ? null : subUnitId);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-center">초등학교 6학년 2학기 수학 개념 정리</h1>
        <p className="text-center mt-2">각 단원별 주요개념과 공식을 확인하세요</p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <p className="text-gray-700">
          이 앱은 초등학교 6학년 2학기 수학 과목의 단원별 핵심 개념과 공식을 담고 있습니다.
          단원을 클릭하여 세부 내용을 확인해보세요. 각 개념은 쉽게 이해할 수 있도록 예시와 함께 설명되어 있습니다.
        </p>
      </div>

      <div className="space-y-4">
        {units.map((unit) => (
          <div key={unit.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className={`p-4 cursor-pointer ${activeUnit === unit.id ? 'bg-blue-500 text-white' : 'bg-blue-100 hover:bg-blue-200'}`}
              onClick={() => handleUnitClick(unit.id)}
            >
              <h2 className="text-lg font-bold">{unit.title}</h2>
            </div>

            {activeUnit === unit.id && (
              <div className="bg-gray-50 p-2">
                {unit.subUnits.map((subUnit) => (
                  <div key={subUnit.id}>
                    <div
                      className={`p-3 cursor-pointer rounded-md my-1 ${activeSubUnit === subUnit.id ? 'bg-blue-200' : 'bg-gray-100 hover:bg-gray-200'}`}
                      onClick={() => handleSubUnitClick(subUnit.id)}
                    >
                      <h3 className="font-medium">{subUnit.title}</h3>
                    </div>
                    {activeSubUnit === subUnit.id && (
                      <div className="p-2">
                        {subUnit.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2025 초등 수학 개념 정리 앱</p>
      </footer>
    </div>
  );
};

export default MathApp;