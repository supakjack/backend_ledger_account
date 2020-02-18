<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Da_la_book extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'la_book';

    protected $fillable = [
        'lab_id',	'lab_token',	'lab_amount',	'lab_income',	'lab_expense',	'lab_descript',	'lab_timestamp',	'lab_lap_id',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;

}