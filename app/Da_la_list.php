<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Da_la_list extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'la_list';

    protected $fillable = [
        'lal_id', 'lal_type', 'lal_money', 'lal_descript', 'lal_timestamp', 'lal_lab_id'

    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;
}
