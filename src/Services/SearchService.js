const apiBase = "http://base.amvd.by/api/";
export const SearchService = {
  getPassportsList(searchForm) {
    let { fio, date_of_birth, personal_number, addres, fio_checkbox } =
      searchForm;
    const fio_split = fio.split(" ", 3);
    let lastname;
    if (fio_split[0]) {
      lastname = fio_split[0];
    } else {
      lastname = "";
    }
    let firstname;
    if (fio_split[1]) {
      firstname = fio_split[1];
    } else {
      firstname = "";
    }
    let finame;
    if (fio_split[2]) {
      finame = fio_split[2];
    } else {
      finame = "";
    }
    let passportURL = `${apiBase}passports/?lastname_rus=${lastname}&firstname_rus=${firstname}&patronymic_rus=${finame}&date_of_birth=${date_of_birth}&personal_number=${personal_number}`;
    //192.168.0.114/api/passports/?lastname_rus=Абла&firstname_rus=&patronymic_rus=&date_of_birth=&personal_number=
    console.log(passportURL);
    return fetch(passportURL).catch((error) => {
      console.log(error);
    });
  },

  getCarsList(searchForm) {
    let {
      gos_number,
      number_of_body,
      brand,
      model,
      color,
      seria_and_number,
      checkbox,
      year,
      type_of_TC,
    } = searchForm;
    let passportAvto = `${apiBase}cars/?number=${gos_number}&car_model__car_model=${model}&car_model__car_mark__car_mark=${brand}&year_of_issue=${year}&body_number=${number_of_body}`;
    console.log(passportAvto);
    return fetch(passportAvto).catch((error) => {
      console.log(error);
    });
  },

  getPersone(personId) {
    let passportURL = `${apiBase}passports/${personId}/`;

    console.log(passportURL);
    return fetch(passportURL).catch((error) => {
      console.log(error);
    });
  },

  getColors() {
    let getColorsURL = `${apiBase}colors/`;
    return fetch(getColorsURL).catch((error) => {
      console.log(error);
    });
  },

  getMark() {
    let getMarkURL = `${apiBase}car-marks/`;
    return fetch(getMarkURL).catch((error) => {
      console.log(error);
    });
  },
  getModel(mark) {
    let getModelURL = `${apiBase}car-models/?car_mark__car_mark=${mark}`;
    return fetch(getModelURL).catch((error) => {
      console.log(error);
    });
  },
  // getResource = async (url) => {
  //   let res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  //   }

  //   return await res.json();
  // },

  // getCharacterById = async (id) => {
  //   const res = await this.getResource(`${this._apiBase}passports/${id}`);
  //   return this._transformCharacter(res);
  // },

  // _transformCharacter = (char) => {
  //   return {
  //     id: char.id,
  //     name: char.lastname_rus,
  //     personal_number: char.personal_number,
  //     date_of_birth: char.date_of_birth,
  //     photo: char.photo,
  //   };
  // }
};
