import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import uploadIcon from "./../../../src/assets/svg/upload.png";
import itemImg from "./../../../src/assets/svg/photoItem.svg";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import triangleIcon from "./../../../src/assets/svg/triangle.png";
import materialIcon from "./../../../src/assets/svg/material.png";
import textureIcon from "./../../../src/assets/svg/texture.png";
import GenderBtn from "./../Base/GenderBtn";
import FormControl from "@material-ui/core/FormControl";
import { StyledInput } from "./../../components/CreateSceneModal/CreateSceneModalStyle";
import InputBorderListDropdown from "./../../components/Base/InputBorderListDropdown/InputBorderListDropdown";
import {
  rareData,
  categoryData,
  rarities,
  categories,
  genderData,
  existItem,
} from "../../config/constant";
import YellowBtn from "./../../components/Base/YellowBtn";
import RoundBackBtn from "../Base/RoundBackBtn";
import { FileUploader } from "react-drag-drop-files";
import QuestionBtn from "../Base/QuestionBtn";
import { Hashing } from "../../common/utils";
import { saveItem } from "../../hooks/builder";

interface Props {
  headerTitle: string;
  show: boolean;
  onClose: () => void;
}

export default function CreateSceneModal({
  headerTitle,
  show,
  onClose,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const [image, setImage] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [category, setCategory] = useState("");
  const [genderBtStatus, setGenderBtnStatus] = useState(genderData.init);
  const [queBtnStatus, setQueBtnStatus] = useState(existItem.init);
  const fileTypes = ["ZIP", "PNG", "GLTF", "GLB"];

  const handleChange = (file: any) => {
    setSelectedFile(file[0]);
    setImage(URL.createObjectURL(file[0]));
    setName(file[0].name.split(".")[0]);
  };

  const handleClose = () => {
    setShowStatus(false);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const init = () => {
    setSelectedFile(null);
    setImage(null);
    setGenderBtnStatus(genderData.init);
    setName("");
    setRarity("");
    setCategory("");
  };

  const handleImportFile = (e: any) => {
    setSelectedFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setName(e.target.files[0].name.split(".")[0]);
  };

  const handleSubmit = () => {
    // console.log(genderBtStatus, name, rarity, category, selectedFile);
    const flagRarity = rarities.includes(rarity);
    const flagCategory = categories.includes(category);
    const formData = new FormData();
    const hashing = new Hashing();
    var bytes: any = [];
    var reader = new FileReader();

    reader.onload = async function () {
      bytes = reader.result;

      if (flagRarity && flagCategory) {
        let item: any;
        const hashName = await hashing.calculateBufferHash(bytes);
        let contents: any = {};

        if (genderBtStatus === genderData.both) {
          contents[`female/${selectedFile.name}`] = hashName;
          contents[`male/${selectedFile.name}`] = hashName;
          contents[`thumbnail.png`] = hashName;
          contents[`image.png`] = hashName;
        } else if (genderBtStatus === genderData.female) {
          contents[`female/${selectedFile.name}`] = hashName;
          contents[`thumbnail.png`] = hashName;
          contents[`image.png`] = hashName;
        } else if (genderBtStatus === genderData.male) {
          contents[`male/${selectedFile.name}`] = hashName;
          contents[`thumbnail.png`] = hashName;
          contents[`image.png`] = hashName;
        }

        item = {
          name: name,
          rarity: rarity,
          category: category,
          contents: contents,
        };
        formData.append("file", selectedFile);
        formData.append("hashName", hashName);
        formData.append("item", item);
        // const save_res = await saveItem(formData);
        // console.log("save_res", save_res);
      }
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleGender = (index: string) => {
    setGenderBtnStatus(index);
    setQueBtnStatus(existItem.init);
  };

  const handleQuestion = (index: string) => {
    setQueBtnStatus(index);
  };

  useEffect(() => {
    init();
    setShowStatus(show);
  }, [show]);

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        {image === null ? (
          <div className={classes.modalRoot}>
            <RoundBackBtn
              className={classes.closeIcon}
              onBack={onClose}
              type="multiply"
            />
            <div className={classes.title}>{headerTitle}</div>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <div className={classes.mainContainer}>
                <div className={classes.dragPartContainer}>
                  <div className={classes.uploadImgContainer}>
                    <img src={uploadIcon} className={classes.uploadIcon} />
                  </div>
                  <div className={classes.dragInfoContainer}>
                    <div className={classes.normalLetter}>
                      Drag our Asset file here in &nbsp;
                      <span className={classes.colorLetter}>
                        ZIP, GLTF, GLB, PNG
                      </span>
                      &nbsp; format, or
                    </div>
                    <span className={classes.importantFunctionLink}>
                      {t("Browse your computer")}.
                    </span>
                  </div>
                </div>
              </div>
            </FileUploader>
          </div>
        ) : (
          <>
            <div className={classes.editModalRoot}>
              <RoundBackBtn
                className={classes.closeIcon}
                onBack={onClose}
                type="multiply"
              />
              <div className={classes.title}>{headerTitle}</div>
              <div className={classes.editMainContainer}>
                <div className={classes.photoInfoContainer}>
                  <div className={classes.photoContainer}>
                    <img
                      src={!image ? itemImg : image}
                      className={classes.photo}
                    />
                    <span className={classes.camera}>
                      <input
                        type="file"
                        onChange={(e) => {
                          handleImportFile(e);
                        }}
                      />
                      <PhotoCameraIcon />
                    </span>
                  </div>
                  <div className={classes.photoDetailInfoContainer}>
                    <div className={classes.triangleContainer}>
                      <img
                        src={triangleIcon}
                        className={classes.triangleicon}
                      />
                      <span>100 triangles</span>
                    </div>
                    <div className={classes.triangleContainer}>
                      <img
                        src={materialIcon}
                        className={classes.triangleicon}
                      />
                      <span>1 material</span>
                    </div>
                    <div className={classes.triangleContainer}>
                      <img src={textureIcon} className={classes.triangleicon} />
                      <span>1 texture</span>
                    </div>
                  </div>
                </div>
                <div className={classes.editFormContainer}>
                  <div className={classes.titleLetter}>
                    Select the body shape for your item
                  </div>
                  <div className={classes.genderContainer}>
                    <GenderBtn
                      letter={genderData.both}
                      actived={genderBtStatus === genderData.both}
                      className={classes.genderBtnContainer}
                      onClick={() => handleGender(genderData.both)}
                    />
                    <GenderBtn
                      letter={genderData.male}
                      actived={genderBtStatus === genderData.male}
                      className={classes.genderBtnContainer}
                      onClick={() => handleGender(genderData.male)}
                    />
                    <GenderBtn
                      letter={genderData.female}
                      actived={genderBtStatus === genderData.female}
                      className={classes.genderBtnContainer}
                      onClick={() => handleGender(genderData.female)}
                    />
                  </div>
                  <div
                    className={clsx(classes.questionPartContainer, {
                      [classes.NoneDisplay]:
                        genderBtStatus === genderData.both ||
                        genderBtStatus === genderData.init,
                    })}
                  >
                    <div className={classes.titleLetter}>
                      Is this part of an existing item
                    </div>
                    <div className={classes.queBtnContainer}>
                      <QuestionBtn
                        letter="Yes"
                        className={classes.yesBtn}
                        actived={queBtnStatus === existItem.yes}
                        onClick={() => handleQuestion(existItem.yes)}
                      />
                      <QuestionBtn
                        letter="No"
                        actived={queBtnStatus === existItem.no}
                        onClick={() => handleQuestion(existItem.no)}
                      />
                    </div>
                  </div>
                  <div
                    className={clsx(classes.pickItemPartContainer, {
                      [classes.NoneDisplay]:
                        genderBtStatus === genderData.both ||
                        queBtnStatus === existItem.init ||
                        queBtnStatus === existItem.no,
                    })}
                  >
                    <div className={classes.titleLetter}>
                      Pick an item that doesn't have this gender
                    </div>
                    <div className={classes.pickupStatus}>
                      No valid items found
                    </div>
                  </div>
                  <div
                    className={clsx(classes.InputsPartContainer, {
                      [classes.NoneDisplay]:
                        genderBtStatus !== genderData.both &&
                        genderBtStatus !== genderData.init &&
                        (queBtnStatus === existItem.init ||
                          queBtnStatus === existItem.yes),
                    })}
                  >
                    <div className={classes.titleLetter}>
                      Enter a name for your item
                    </div>
                    <FormControl className={classes.nameInput}>
                      <StyledInput
                        placeholder={t("New Scene")}
                        value={name === "" ? undefined : name}
                        onChange={(e) => {
                          handleName(e);
                        }}
                      />
                    </FormControl>
                    <div className={classes.titleLetter}>
                      How rare is this item?
                    </div>
                    <InputBorderListDropdown
                      type="rarity"
                      data={rareData}
                      value={rarity}
                      handleChange={(value: any) => {
                        setRarity(value);
                      }}
                      className={classes.inputSelectContainer}
                    />
                    <div className={classes.titleLetter}>
                      What is the category of this item?
                    </div>
                    <InputBorderListDropdown
                      type="category"
                      data={categoryData}
                      value={category}
                      className={classes.inputSelectContainer}
                      handleChange={(value: any) => {
                        setCategory(value);
                      }}
                    />
                  </div>

                  <YellowBtn
                    onClick={handleSubmit}
                    disabled={
                      genderBtStatus === genderData.init ||
                      name === "" ||
                      rarity === "" ||
                      category === ""
                    }
                    letter="Create"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
