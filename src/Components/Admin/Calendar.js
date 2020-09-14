import React, { Component } from "react";

export default class Calendar extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-wrap bg-light-gray">
        <div className="col-5">
          <div className="bg-white my-2 w-100 px-2">
            <h2 className="text-center text-pink font-weight-bold border-bottom py-3">
              شهریور 1399
            </h2>
            <div className="w-100 d-flex flex-wrap bg-mid-gray calendar-head">
              <p>شنبه</p>
              <p>یکشنبه</p>
              <p>دوشنبه</p>
              <p>سه شنبه</p>
              <p>چهارشنبه</p>
              <p>پنجشنبه</p>
              <p>جمعه</p>
            </div>
            <div className="w-100 d-flex flex-wrap calendar-body">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
              <p>15</p>
              <p>16</p>
              <p>17</p>
              <p>18</p>
              <p>19</p>
              <p>20</p>
              <p>21</p>
              <p>22</p>
              <p>23</p>
              <p className="bg-pink-light">24</p>
              <p>25</p>
              <p>26</p>
              <p>27</p>
              <p>28</p>
              <p>29</p>
              <p>30</p>
              <p>31</p>
            </div>
          </div>
        </div>

        <div className="col-7">
          <div className="bg-white my-2 w-100 px-2">
            <h2 className="text-center text-pink font-weight-bold border-bottom py-3">
              برنامه روزانه - 24 شهریور
            </h2>
            <div className="w-100 d-flex flex-wrap bg-pink">
            <div className="col-4 border border-white py-2 text-center text-white">قرار کاری</div>
            <div className="col-4 border border-white py-2 text-center text-white">درخواست قرار کاری</div>
            <div className="col-4 border border-white py-2 text-center text-white">همه قرار ها</div>
            </div>
            <div className="w-100 d-flex flex-wrap py-3">
              <div className="col-3 border font-weight-bold py-2">8 تا 10</div>
              <div className="col-7 border py-2">رنگ ریشه و لایت مو</div>
              <div className="col-2 border py-2 text-center">تایید شده</div>
              <div className="col-3 border font-weight-bold py-2 bg-pink-light">12 تا 15</div>
              <div className="col-7 border py-2 bg-pink-light">مش، هایلایت، لولایت</div>
              <div className="col-2 border py-2 text-center bg-pink-light">منتظر تایید</div>
              <div className="col-3 border font-weight-bold py-2">18 تا 20</div>
              <div className="col-7 border py-2">مش </div>
              <div className="col-2 border py-2 text-center">تایید شده</div>
              <div className="col-3 border font-weight-bold py-2 bg-pink-light">
                20:30 تا 22:30
              </div>
              <div className="col-7 border py-2 bg-pink-light">مش، هایلایت، لولایت</div>
              <div className="col-2 border py-2 text-center bg-pink-light">منتظر تایید</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
