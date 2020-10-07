import React, { useEffect, useCallback, useRef } from "react";

import { transformObjectInArray, objectIsEmpty } from "@helper/utils";

import * as S from "./styles";

function List({ data = {} }) {
  const refList = useRef([]);

  const addItemStorage = (id, value) => window.localStorage.setItem(id, value);

  const removeItemStorage = (id) => window.localStorage.removeItem(id);

  const moveScrollUntilToTheTarget = (top) => scroll({ top: top, behavior: "smooth" });

  useEffect(() => {
    if (window.localStorage.length) {
      const timer = setTimeout(() => {
        refList.current.forEach((tag) => {
          const storageValue = window.localStorage.getItem(tag.id);
          storageValue ? (tag[storageValue] = true) : null;
        });
        clearTimeout(timer);
      }, 1000);
    }
  }, [refList]);

  const handleChecked = useCallback(
    (event) => {
      const parent = event.target.parentNode.parentNode;
      const closestInput = event.target.closest(".init").querySelector("input");
      const allInputs = [...parent.querySelectorAll("input")];

      if (closestInput !== event.target) {
        closestInput.indeterminate = true;
      }

      allInputs.forEach((tag) => (tag.checked = event.target.checked));
      allInputs.forEach((tag) => {
        if (closestInput.indeterminate) {
          addItemStorage(closestInput.id, "indeterminate");
        }

        tag.checked
          ? addItemStorage(tag.id, "checked")
          : removeItemStorage(tag.id);
      });

      const closestInputList = [
        ...event.target
          .closest(".init")
          .querySelector("ul")
          .querySelectorAll("input"),
      ];
      const hasSomeInputUnchecked = closestInputList.filter((tag) => !tag.checked);

      if (!hasSomeInputUnchecked.length) {
        closestInput.indeterminate = false;
        closestInput.checked = true;
        addItemStorage(closestInput.id, "checked");
      }
    },
    [data]
  );

  const handleToggleContainer = useCallback(({ target }) => {
    const container = target.parentNode.parentNode.querySelector("ul");
    const measureTop = target.parentNode.offsetTop;

    container?.classList.toggle("hide");
    target?.classList.toggle("active");

    moveScrollUntilToTheTarget(measureTop);
  }, []);

  const recursiveRender = (info, index = 0) => {
    return (
      <S.Container className={index === 0 ? "" : "hide"}>
        {transformObjectInArray(info).map((item, i) => (
          <S.List key={item.id} index={index} className={index === 0 ? "init" : ""}>
            <S.Content paddingLeft={item?.level}>
              <input
                type="checkbox"
                id={item.id}
                onChange={(event) => handleChecked(event, item)}
                ref={(el) => refList.current.push(el)}
              />
              <label htmlFor={item.id}>{item.name}</label>
              <S.ArrowButton type="button" onClick={handleToggleContainer} />
            </S.Content>

            {!objectIsEmpty(item.children)
              ? recursiveRender(item.children, index + 1)
              : null}
          </S.List>
        ))}
      </S.Container>
    );
  };

  return recursiveRender(data);
}

export default React.memo(List);
